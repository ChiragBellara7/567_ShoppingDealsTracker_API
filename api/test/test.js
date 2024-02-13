const Deal = require("../models/deal");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.should();

chai.use(chaiHttp);

describe("Deals", () => {
    beforeEach((done) => {
        Deal.deleteMany({}, (err) => {
            done();
        });
    });
    describe("/GET deal", () => {
        it("it should GET all the deals", (done) => {
            chai
                .request(app)
                .get("/api/deals")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a("array");
                    res.body.data.length.should.be.eql(0);
                    done();
                });
        });
    });
    describe("/POST deal", () => {
        it("it should new POST a deal", (done) => {
            let deal = {
                title: "This is the first deal",
                body: "This is the deals details",
                image: "Some image"
            };
            chai
                .request(app)
                .post("/api/deals")
                .send(deal)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a("object");
                    res.body.status.should.be.eql("success");
                    done();
                });
        });
    });
    describe("/GET/:id deal", () => {
        it("it should GET a deal by the id", (done) => {
            let deal = new Deal({
                title: "This is the first Deal",
                body: "This is the deals details",
                image: "Some image"
            });
            deal.save((err, deal) => {
                chai
                    .request(app)
                    .get("/api/deals/" + deal.id)
                    .set(deal)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.data.should.be.a("object");
                        res.body.status.should.be.eql("success");
                        done();
                    });
            });
        });
    });
    describe("/PUT/:id deal", () => {
        it("it should UPDATE a deal given the id", (done) => {
            let deal = new Deal({
                title: "this is the first deal",
                body: "this is the deals details",
                image: "Some Image"
            });
            deal.save((err, deal) => {
                console.log(deal.id);
                chai
                    .request(app)
                    .put("/api/deals/" + deal.id)
                    .send({
                        title: "The first deal was updated",
                        body: "this is a deal details updated",
                        image: "some image"
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.data.should.be.a("object");
                        res.body.status.should.be.eql("success");
                        done();
                    });
            });
        });
    });
    describe("/DELETE/:id deal", () => {
        it("it should DELETE a deal given the id", (done) => {
            let deal = new Deal({
                title: "This is the first deal",
                body: "this is the deals details",
                image: "some image"
            });
            deal.save((err, deal) => {
                chai
                    .request(app)
                    .delete("/api.deals/" + deal.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.data.should.be.a("object");
                        res.body.status.should.be.eql("success");
                        done();
                    });
            });
        });
    });
});