const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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