const deal = require("../models/deal");
const dealService = require("../services/dealService");

exports.getAllDeals = async (req, res) => {
    try {
        const deals = await dealService.getAllDeals();
        res.json({data: deals, status: "success"});
    } catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.createDeal = async (req, res) => {
    try{
        const deal = await dealService.createDeal(req.body);
        res.json({data: deal, status: "success"});
    }catch (err) {
        res.status(500).json({error: err.message})
    }
};

exports.getDealById = async (req,res)=>{
    try{
        const deal = await dealService.getDealbyID(req.params.id);
        res.json({data: deal, status: "success"});
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.updateDeal = async (req, res) => {
    try{
        const deal = await dealService.updateDeal(req.params.id, req.body);
        res.json({data: deal, status:"success"});
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.deleteDeal = async (req,res) => {
    try{
        const deal = await dealService.deleteDeal(req.params.id);
        res.json({data: deal, status: "success"});
    }catch (err) {
        res.status(500).json({error: err.message});
    }
};

