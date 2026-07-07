var express=require("express");
var fileuploader=require("express-fileupload");
var mongoose=require("mongoose");
var cors=require("cors");
var path=require("path");
const nodemailer=require("nodemailer");
var app=express();

app.use(cors());
app.listen(2004,function(){
    console.log("Server Started...");
})
app.use(express.urlencoded({ extended: true }));
app.use(fileuploader());

// var url="mongodb://localhost:27017/jan2025";
var url="mongodb+srv://sajal:7NJP7XkQjCMe7DG9@reactjs.k9sse.mongodb.net/?retryWrites=true&appName=reactjs";

mongoose.connect(url).then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log(err.message);
})

var userScheema=mongoose.Schema;

var userColSchema={
    uid:{type:String,required:true,index:true,unique:true},
    pwd:String,
    dos:{type:Date,default:Date.now},
    picpath:String
}
var ver={
    versionKey: false, // to avoid __v field in table come by default
  }
var UserColShema=new userScheema(userColSchema,ver);
var UserColRef=mongoose.model("userCollection",UserColShema);//create collection in mongodb database

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "sajalsowna9@gmail.com",
      pass: "rcek risn detr eyci",
    },
  });

  app.post("/mail-send", async function (req, resp) {
    try {
      let email = req.body.txtEmail;
  
      // Fetch the user with findOne
      const user = await UserColRef.findOne({ uid: email });
  
      if (!user) {
        return resp.status(404).send("User not found");
      }
  
      // Send the email
      const info = await transporter.sendMail({
        from: '"if you know u know 👻" <sajalsowna9@gmail.com>', // Sender address
        to: email, // Receiver email
        subject: "Password Recovery", // Subject line
        text: `Your password is: ${user.pwd}`, // Plain text body
        html: `<b>Your password is: ${user.pwd}</b>`, // HTML body
      });
  
      console.log("Message sent: %s", info.messageId);
      resp.send("Mail sent successfully");
    } catch (error) {
      console.error("Error:", error);
      resp.status(500).send("Failed to send mail");
    }
  }); 
app.get("/saveuser",(req,resp)=>{
        console.log(req.query);
        req.query.picpath="nopic.jpg";
        var userObj=new UserColRef(req.query);
        userObj.save().then((document)=>{
                resp.send(document)
        }).catch((err)=>{
                console.log(err.message);
                resp.send(err.message)

        })
})
app.get("/updateuser",(req,resp)=>{
  console.log(req.query.uid);
  UserColRef.findOneAndUpdate({uid:req.query.uid},req.query).then((document)=>{
    resp.send("updateddddddd!!!!!!")
    }).catch((err)=>{
    console.log(err.message);
    resp.send(err.message)
    })
      
  })
  app.get("/deleteuser",(req,resp)=>{
    console.log(req.query.uid);
    UserColRef.findOneAndDelete({uid:req.query.uid}).then((document)=>{
      resp.send("deleteddddd!!!!!!")
      }).catch((err)=>{
      console.log(err.message);
      resp.send(err.message)
      })
        
    })
app.post("/save1",(req,resp)=>{

    let filename="nopic.jpg";
    if(req.files!=null)
    {
        filename=req.files.picpath.name;

        var filepath=path.join(__dirname,"uploads",filename);
        req.files.picpath.mv(filepath);
        console.log(filepath)
    }
    else
    console.log(req.files);


    req.body.picpath=filename; //adding a n ew field in body object



    //==========================================
    var userJson=new UserColRef(req.body);

    userJson.save().then((doc)=>{
        resp.send(doc);  //saved doc will be returned
    }).catch((err)=>{
        resp.send(err.message);
    })
})
app.get("/show",(req,resp)=>{
    
   
    UserColRef.find().then((document)=>{
            resp.send(document)
    }).catch((err)=>{
            console.log(err.message);
            resp.send(err.message)

    })
})