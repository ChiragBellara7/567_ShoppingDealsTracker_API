const account = require("../models/account");
const accountService = require("../services/accountService");

exports.getAllAccounts = async (req, res) => {
    try {
        const accounts = await accountService.getAllDeals();
        res.json({data: accounts, status: "success"});
    } catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.createAccount = async (req, res) => {
    try{
        const account = await accountService.createAccount(req.body);
        res.json({data: account, status: "success"});
    }catch (err) {
        res.status(500).json({error: err.message})
    }
};

exports.getAccountById = async (req,res)=>{
    try{
        const account = await accountService.getAccountbyID(req.params.id);
        res.json({data: account, status: "success"});
    }catch (err){
        res.status(500).json({error: err.message});
    }
};


exports.updateAccount = async (req, res) => {
    try{
        const account = await accountService.updateAccount(req.params.id, req.body);
        res.json({data: account, status:"success"});
    }catch (err){
        res.status(500).json({error: err.message});
    }
};


exports.deleteAccount = async (req,res) => {
    try{
        const account = await accountService.deleteAccount(req.params.id);
        res.json({data: account, status: "success"});
    }catch (err) {
        res.status(500).json({error: err.message});
    }
};

