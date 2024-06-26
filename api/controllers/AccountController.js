const account = require("../models/account");
const accountService = require("../services/accountService");
// const { createHash } = require('crypto')

exports.getAllAccounts = async (req, res) => {
    try {
        const accounts = await accountService.getAllAccounts();
        res.json({data: accounts, status: "success"});
    } catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.createAccount = async (req, res) => {
    console.log("this shit stupid")
    try{
        let newUser = new account();
        newUser.username = req.body.username;
        newUser.password = req.body.password;
        newUser.setPassword(req.body.password);
        const accounts = await accountService.createAccount(newUser);
        // account.setPassword(req.body.password)
        res.json({data: accounts, status: "success"});
    }catch (err) {
        res.status(500).json({error: err.message})
    }
};

exports.getAccountById = async (req,res)=>{
    try{
        const account = await accountService.getAccountbyID(req.params.id);
        if (account.validPassword(req.body.password)){
            res.json({status: "success"});
        }
        // res.json({data: account, status: "success"});
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

