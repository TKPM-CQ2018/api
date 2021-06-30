const express = require("express");
const router = express.Router();

const testController = require("../controllers/testController");

router.get("/", testController.detail);

module.exports = router;
