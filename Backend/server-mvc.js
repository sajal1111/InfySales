const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

var express=require("express");
var fileuploader=require("express-fileupload");
var mongoose=require("mongoose");
var cors=require("cors");
var path=require("path");
var dotenv=require("dotenv");
var { getfranModel } = require("./models/FranchiseModel");
var UserColRef = getfranModel();
var {url}=require ("./config/config");
var app=express();


// ... the rest of your server-mvc.js code starts here
// var helmet = require("helmet");

// // Use Helmet for security
// app.use(
//     helmet({
//         contentSecurityPolicy: {
//             directives: {
//                 defaultSrc: ["'self'"], // Allow content from the same origin
//                 scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"], // Allow inline scripts
//                 styleSrc: ["'self'", "'unsafe-inline'"], // Allow inline styles
//                 imgSrc: ["'self'", "data:", "https://franchisebackend-production-fa4b.up.railway.app"], // Allow images
//                 connectSrc: ["'self'", "https://franchisebackend-production-fa4b.up.railway.app"], // Allow API calls
//             },
//         },
//     })
// );
app.get("/", (req, res) => {
  res.send("Backend is running...");
});
app.use(cors());
app.listen(2004,function(){
    console.log("Server Started...");
})
app.use(express.urlencoded({ extended: true }));
app.use(express.json());      // <-- ADD THIS
app.use(fileuploader());
dotenv.config();//key values pairs inside .env file will

 var urll=url;
// var url="mongodb+srv://Vanshjindal:vansh*1427@vansh2025.5nvs6.mongodb.net/?retryWrites=true&appName=Vansh2025";

const nodemailer = require("nodemailer");

// Configure Nodemailer Transporter
console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS:", process.env.SMTP_PASS ? "Loaded ✅" : "Not Loaded ❌");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  async function generatePassword() {
    const { nanoid } = await import("nanoid");
    return nanoid(8);
}

app.post("/api/send-franchise-email", async (req, res) => {
    const { email, name } = req.body;
   console.log(email,name);
   
    if (!email || !name) {
        return res.status(400).json({ success: false, error: "Missing email or name" });
    }
    const generatedPassword = await generatePassword();
    var userObj = new UserColRef({ name,email, password: generatedPassword });
        await userObj.save()
  .then((document) => console.log("User saved:", document))
  .catch((err) => console.log("Error saving user:", err.message));
    try {

        const mailOptions = {
          from: '"Infysales" <sajalsowna9@gmail.com>', // ✅ Use correct email
          to: email,
          subject: "Franchise Approval - Your Login Details",
          html: `
            <h2>Hello ${name},</h2>
            <p>Congratulations! You have been approved for a franchise.</p>
            <p>Your login credentials:</p>
            <ul>
              <li><b>Email:</b> ${email}</li>
              <li><b>Password:</b> ${generatedPassword}</li> <!-- ✅ Corrected usage -->
            </ul>
            <p>Use these credentials to log in and start your journey.</p>
            <br>
            <p>Best regards,<br>Infysales Team</p>
          `,
        };
    
        await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent to ${email}`);
      } catch (error) {
        console.error("❌ Error sending email:",error);
      }
});
mongoose.connect(urll)
.then(() => {
    console.log("✅ MongoDB Connected");
})
.catch((err) => {
    console.log("❌ MongoDB Connection Error");
    console.log(err);
});

// var userRouter=require("./routers/userRouter");
// app.use("/user",userRouter);
var applicantRouter = require("./routers/applicantrouter");
var adminRouter=require("./routers/adminRouter");
app.use("/api/admin", adminRouter);

app.use("/api/applicant", applicantRouter);
var clientRouter=require("./routers/clientrouter");
app.use("/client",clientRouter);
