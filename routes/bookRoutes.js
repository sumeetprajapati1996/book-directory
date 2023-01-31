const express = require("express");
const router = express.Router();
const bookController = require('../controllers/bookController')

router.get("/books/list", bookController.list);

module.exports = router