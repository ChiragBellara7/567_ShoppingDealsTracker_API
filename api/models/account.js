const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// This is the schema model for the mongoDB and the expected values to be saved in a JSON'esq format.
const accountSchema = mongoose.Schema({
    ID: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    username: String,
    password: String,
    email: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Account", accountSchema);