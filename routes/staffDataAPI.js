const express = require("express");
const router = express.Router();

const staffController = require("../controllers/staffController");

router.get("/", staffController.detail);

module.exports = router;
