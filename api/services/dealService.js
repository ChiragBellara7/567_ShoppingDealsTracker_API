const DealModel = require("../models/deal");
// This is where we our requests will go to 
// make a database query by using the mongoDBs model object we created, and to
// do the following queries it uses the following method
// .find() will get all the deals
// .create() will create a new deal based on the information passed to it from the frontend
// .findById() will get a specific deal from the database based on its ID
// .findByIdAndUpdate() will update the deal based on the ID passed to it
// .findByIdAndDelete() given an ID will delete it from the database.
exports.getAllDeals = async () => {
    return await DealModel.find();
};

exports.createDeal = async (deal) => {
    return await DealModel.create(deal)
};

exports.getDealbyID = async (id) => {
    return await DealModel.findById(id);
};

exports.updateDeal = async (id,deal) => {
    return await DealModel.findByIdAndUpdate(id,deal);
};

exports.deleteDeal = async (id) => {
    return await DealModel.findByIdAndDelete(id);
}

exports.getFilteredDealsWithPrice = async (min, max) => {
  return await DealModel.find({
    $and: [{ price: { $gte: min } }, { price: { $lte: max } }],
  });
};

exports.getFilteredDealsWithTags = async (tags) => {
  return await DealModel.find({ category: { $in: tags } });
};



