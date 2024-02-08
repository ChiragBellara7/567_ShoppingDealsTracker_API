const express = require("express");
const app = express();
const dealRouter = require("./routes/DealRoutes");

app.use(express.json());

app.listen(3001,()=> {
    console.log("Server is running on port 3001")
})

app.use("/api/deals", dealRouter)

const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/"
)

module.exports = app;

