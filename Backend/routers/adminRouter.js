var express = require("express");

var obj = require("../controllers/adminController");

var router = express.Router();

router.post("/login", obj.login);

router.get("/allUsers", obj.fetchAllUsers);

module.exports = router;