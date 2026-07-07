require("dotenv").config();
const jwt = require("jsonwebtoken");

function login(req, resp) {
    const { email, password } = req.body;

    // Check Admin Credentials
    if (
        email === process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASSWORD
    ) {
        // Create JWT Token
        const token = jwt.sign(
            {
                email: email,
                role: "admin",
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "2h",
            }
        );

        return resp.json({
            success: true,
            msg: "Admin Login Successful",
            token: token,
        });
    }

    return resp.status(401).json({
        success: false,
        msg: "Invalid Email or Password",
    });
}

function fetchAllUsers(req, resp) {
    resp.send("All Users");
}

module.exports = {
    login,
    fetchAllUsers,
};