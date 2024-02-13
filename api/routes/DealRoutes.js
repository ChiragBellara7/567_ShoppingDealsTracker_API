const express = require("express");
const {
    getAllDeals,
    createDeal,
    getDealById,
    updateDeal,
    deleteDeal,
} = require("../controllers/DealController");

const router = express.Router();

router.route("/").get(getAllDeals).post(createDeal);
router.route("/:id").get(getDealById).put(updateDeal).delete(deleteDeal);

module.exports = router;