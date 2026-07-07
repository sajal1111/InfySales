var express = require("express");
var router = express.Router();

const verifyAdmin = require("../middleware/verifyAdmin");

var {
    doSaveUser,
    dotakedata,
    doupdatestatus,
    dologin
} = require("../controllers/Applicant-controller");

// Public Routes
router.post("/dosaveuser", doSaveUser);
router.post("/login", dologin);

// Admin Protected Routes
router.get("/takedata", verifyAdmin, dotakedata);
router.post("/updateStatus", verifyAdmin, doupdatestatus);

module.exports = router;