const DealModel = require("../models/deal");

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