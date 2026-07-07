var { getAppModel } = require("../models/Applicantmodel");
var UserColRef = getAppModel();
const {getfranModel} = require("../models/FranchiseModel"); // Import your model
var User=getfranModel();
const dologin = async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password);
    
    if (!email || !password) {
        return res.status(400).json({ success: false, error: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ email });

console.log("User from DB:", user);
console.log("Entered password:", password);

if (!user) {
    return res.status(401).json({
        success: false,
        error: "User not found",
    });
}

if (user.password !== password) {
    return res.status(401).json({
        success: false,
        error: "Password mismatch",
    });
}

return res.json({
    success: true,
    message: "Login successful",
});

        if (!user) {
            return res.status(401).json({ success: false, error: "Invalid credentials" });
        }

        res.json({ success: true, message: "Login successful"}); // Redirect to Dashboard
    } catch (error) {
        res.status(500).json({ success: false, error: "Server error" });
    }
};



// Save applicant
function doSaveUser(req, resp) {
    console.log(req.body);
    var userObj = new UserColRef(req.body);

    userObj.save()
        .then((document) => {
            resp.json({ doc: document, status: true, msg: "Saved Successfully" });
        })
        .catch((err) => {
            console.log(err.message);
            resp.json({ status: false, msg: err.message });
        });
}

// Fetch all applicants
const dotakedata = async (req, res) => {
    try {
        const applications = await UserColRef.find({}).sort({ date: -1 });
        res.json({ status: true, applications });
    } catch (err) {
        console.error("Error fetching applications:", err);
        res.json({ status: false, msg: err.message });
    }
};

// Update applicant status
const doupdatestatus = async (req, res) => {
  try {
      console.log("Received Request Body:", req.body);
      const { uid, istatus } = req.body;

      console.log("Updating status for ID:", uid, "New Status:", istatus);

      // Ensure ID is a valid MongoDB ObjectId
      // const mongoose = require("mongoose");
      // if (!mongoose.Types.ObjectId.isValid(uid)) {
      //     return res.json({ status: false, msg: "Invalid ID format" });
      // }

      const updateResult = await UserColRef.updateOne(
          { uid: uid }, // Find by _id
          { $set: { istatus: istatus } } // Update istatus instead of status
      );

      res.json({ 
          status: true, 
          msg: "Status updated successfully"
      });
  } catch (err) {
      console.error("Error updating status:", err);
      res.json({ status: false, msg: err.message });
  }
};
  


module.exports = { doSaveUser, dotakedata, doupdatestatus,dologin};