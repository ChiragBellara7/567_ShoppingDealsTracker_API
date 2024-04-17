const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var crypto = require('crypto');
const { kStringMaxLength } = require("buffer");
// This is the schema model for the mongoDB and the expected values to be saved in a JSON'esq format.
const accountSchema = mongoose.Schema({
    ID: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    username: String,
    email: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    hash : String,
    salt : String
});

accountSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');

    this.hash = crypto.pbkdf2Sync(password, this.salt,
    1000, 64, 'sha512').toString('hex');
}

accountSchema.methods.validPassword = function(password){
    var hash = crypto.pbkdf2Sync(password,
    this.salt,1000,64, 'sha512').toString('hex');
    return this.hash === hash;
}

const account = module.exports = mongoose.model("Account", accountSchema);