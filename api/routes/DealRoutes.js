const express = require("express");
const {
    getAllDeals,
    createDeal,
    getDealById,
    updateDeal,
    deleteDeal,
    filterDealsWithPrice,
    filterDealsWithTags,
    searchDealsByKeyword,
} = require("../controllers/DealController");

// this is where we use the express.Router() function to create out routes and
// apply url based links for the respective requests. GET/POST/DELETE/PUT
const router = express.Router();

router.route("/").get(getAllDeals).post(createDeal);
router.route("/:id").get(getDealById).put(updateDeal).delete(deleteDeal);
router.route("/filtered/tags").get(filterDealsWithTags);
router.route("/filtered/price").get(filterDealsWithPrice);
router.route("/search/:keyword").get(searchDealsByKeyword);

module.exports = router;
