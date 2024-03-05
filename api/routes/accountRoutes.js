const express = require("express");
const {
    getAllAccounts,
    createAccount,
    getAccountById,
    updateAccount,
    deleteAccount,
} = require("../controllers/AccountController");

// this is where we use the express.Router() function to create out routes and
// apply url based links for the respective requests. GET/POST/DELETE/PUT
const router = express.Router();

router.route("/").get(getAllAccounts).post(createAccount);
router.route("/:id").get(getAccountById).put(updateAccount).delete(deleteAccount);

module.exports = router;