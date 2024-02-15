const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// This is the schema model for the mongoDB and the expected values to be saved in a JSON'esq format.
const dealSchema = mongoose.Schema({
    title: String,
    body: String,
    price: Number,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Deal", dealSchema);