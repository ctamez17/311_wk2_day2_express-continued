const express = require("express");
const router = express.Router();
const contacts = require("../data/contacts");

router.get("/contacts");

module.exports = router;