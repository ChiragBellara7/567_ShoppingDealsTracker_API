const account = require("../models/account");
const accountService = require("../services/accountService");
const { createHash } = require('crypto')

exports.getAllAccounts = async (req, res) => {
    try {
        const accounts = await accountService.getAllDeals();
        res.json({data: accounts, status: "success"});
    } catch (err){
        res.status(500).json({error: err.message});
    }
};

// exports.createAccount = async (req, res) => {
//     try{
//         const account = await accountService.createAccount(createHash('sha256').update(req.body).digest('base64'));
//         res.json({data: account, status: "success"});
//     }catch (err) {
//         res.status(500).json({error: err.message})
//     }
// };

//▲
//Both styles need to be tested to check if it properly hashes the entire account information so none of it is visible until
//unhashed on the frontend and compared.
//▼

exports.createAccount = async (req, res) => {
    try{
        const account = await accountService.createAccount(createHash('sha256').update(req.body).digest('base64'));
        res.json({data: createHash('sha256').update(account).digest('base64'), status: "success"});
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

