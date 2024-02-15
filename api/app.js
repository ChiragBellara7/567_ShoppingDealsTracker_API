// Defining variables and importing the routes and the express module
const express = require("express");
const app = express();
const dealRouter = require("./routes/DealRoutes");

// This file utilizes the basics of Express to setup the node.js application
// We call the listen function to ensure that the application is running on the backend
// We set the routes of the requests through the "dealRouter" variable.
// We create a mongoose variable that allows us to connect to the local (system) mongo database
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

