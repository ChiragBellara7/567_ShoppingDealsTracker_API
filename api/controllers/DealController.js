const deal = require("../models/deal");
const dealService = require("../services/dealService");
// This will get all the deals in the database on success.
// On failure it will return the error of 500 and what the error was as a status message.
exports.getAllDeals = async (req, res) => {
    try {
        const deals = await dealService.getAllDeals();
        res.json({data: deals, status: "success"});
    } catch (err){
        res.status(500).json({error: err.message});
    }
};

// This will create a new deal in the database based on the data fed to it on success.
// On failure it will return the error of 500 and what the error was as a status message.
exports.createDeal = async (req, res) => {
    try{
        const deal = await dealService.createDeal(req.body);
        res.json({data: deal, status: "success"});
    }catch (err) {
        res.status(500).json({error: err.message})
    }
};

// This will get the deal based on the inputed ID in the database on success.
// On failure it will return the error of 500 and what the error was as a status message.
exports.getDealById = async (req,res)=>{
    try{
        const deal = await dealService.getDealbyID(req.params.id);
        res.json({data: deal, status: "success"});
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

// This will update a deal based on an ID the database on success.
// On failure it will return the error of 500 and what the error was as a status message.
exports.updateDeal = async (req, res) => {
    try{
        const deal = await dealService.updateDeal(req.params.id, req.body);
        res.json({data: deal, status:"success"});
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

// This will delete a specific deal based on ID in the database on success.
// On failure it will return the error of 500 and what the error was as a status message.
exports.deleteDeal = async (req,res) => {
    try{
        const deal = await dealService.deleteDeal(req.params.id);
        res.json({data: deal, status: "success"});
    }catch (err) {
        res.status(500).json({error: err.message});
    }
};

// This will return the deals that satisfy the given price range criteria on success.
// On failure it will return the error of 500 and what the error was as a status message.
exports.filterDealsWithPrice = async (req, res) => {
  try {
    var minPrice = req.body.min;
    var maxPrice = req.body.max;
    const deals = await dealService.getFilteredDealsWithPrice(
      minPrice,
      maxPrice
    );
    res.json({ data: deals, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// This will return the deals that satisfy the given category criteria on success.
// On failure it will return the error of 500 and what the error was as a status message.
exports.filterDealsWithTags = async (req, res) => {
  try {
    var tags = req.body.tags.split(" ");
    var updated_tags = tags.map(function (e) {
      str = e.charAt(0).toUpperCase() + e.slice(1);
      return str;
    });
    const deals = await dealService.getFilteredDealsWithTags(updated_tags);
    res.json({ data: deals, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.searchDealsByKeyword = async (req, res) => {
  // console.log(req.params);
  const keyword = req.params.keyword;
  try {
    const deals = await dealService.searchDealsByKeywords(keyword);
    res.json({ data: deals, status: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

