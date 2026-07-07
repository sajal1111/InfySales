const jwt = require("jsonwebtoken");
require("dotenv").config();

function verifyAdmin(req, res, next) {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            msg: "Access Denied. No Token Provided.",
        });
    }

    // Expected format: Bearer <token>
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            msg: "Invalid Token Format",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Store decoded user info
        req.admin = decoded;

        next();
    } catch (err) {
        return res.status(403).json({
            success: false,
            msg: "Invalid or Expired Token",
        });
    }
}

module.exports = verifyAdmin;