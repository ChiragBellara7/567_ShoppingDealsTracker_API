const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// This is the schema model for the mongoDB and the expected values to be saved in a JSON'esq format.
const dealSchema = mongoose.Schema({
    ID: {
        type: Schema.Types.ObjectId,
        auto: true
    },
    name: String,
    price: Number,
    category: String,
    shortDesc: String,
    longDesc: String,
    couponCode: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    expiryDate: Date,
    image: String
});

module.exports = mongoose.model("Deal", dealSchema);
