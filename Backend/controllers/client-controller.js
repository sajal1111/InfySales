var { clientmodel } = require("../models/clientmodel");
var UserColRef = clientmodel();

const { getfranModel } = require("../models/FranchiseModel");
const Franchise = getfranModel();

const nodemailer = require("nodemailer");
require("dotenv").config();

// Gmail Transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// ===========================
// Save Sales Data
// ===========================
function doSaveUser(req, resp) {
    console.log(req.body);

    var userObj = new UserColRef(req.body);

    userObj.save()
        .then((document) => {
            resp.json({
                doc: document,
                status: true,
                msg: "Saved Successfully"
            });
        })
        .catch((err) => {
            console.log(err.message);
            resp.json({
                status: false,
                msg: err.message
            });
        });
}

// ===========================
// Get Sales Data
// ===========================
const doGetSales = async (req, res) => {

    const { from, to } = req.query;
    const filter = {};

    if (from && to) {
        filter.date = {
            $gte: new Date(from),
            $lte: new Date(to)
        };
    }

    try {
        const sales = await UserColRef.find(filter);
        res.json(sales);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Failed to fetch sales data"
        });
    }
};

// ===========================
// Forgot Password
// ===========================
const forgotPassword = async (req, res) => {

    console.log("Forgot Password Request:", req.body);

    const { email } = req.body;

    try {

        // Search in Franchise collection
        const user = await Franchise.findOne({ email });

        console.log("User Found:", user);

        if (!user) {
            return res.json({
                success: false,
                error: "Email not found"
            });
        }

        const mailOptions = {
            from: `"InfySales" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Password Recovery",

            html: `
                <h2>InfySales Password Recovery</h2>

                <p>Hello <b>${user.name || "User"}</b>,</p>

                <p>Your login credentials are:</p>

                <ul>
                    <li><b>Email:</b> ${user.email}</li>
                    <li><b>Password:</b> ${user.password}</li>
                </ul>

                <br>

                <p>Regards,</p>
                <p><b>InfySales Team</b></p>
            `
        };

        await transporter.sendMail(mailOptions);

        console.log("✅ Password Recovery Email Sent");

        return res.json({
            success: true,
            message: "Password sent successfully"
        });

    }
    catch (err) {

        console.error(err);

        return res.json({
            success: false,
            error: "Server Error"
        });

    }
};

module.exports = {
    doSaveUser,
    doGetSales,
    forgotPassword
};