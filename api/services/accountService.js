const AccountModel = require("../models/account");
// This is where we our requests will go to 
// make a database query by using the mongoDBs model object we created, and to
// do the following queries it uses the following method

exports.getAllAccounts = async () => {
    return await AccountModel.find();
};

exports.createAccount = async (account) => {
    return await AccountModel.create(account)
};

exports.getAccountbyID = async (id) => {
    return await AccountModel.findById(id);
};

exports.updateAccount = async (id,account) => {
    return await AccountModel.findByIdAndUpdate(id,account);
};

exports.deleteAccount = async (id) => {
    return await AccountModel.findByIdAndDelete(id);
}