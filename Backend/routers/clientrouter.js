var express = require("express");
var router = express.Router();

var {
    doSaveUser,
    doGetSales,
    forgotPassword
} = require("../controllers/client-controller");

router.post("/dosaveuser", doSaveUser);
router.get("/getSales", doGetSales);
router.post("/forgot-password", forgotPassword);

module.exports = router;