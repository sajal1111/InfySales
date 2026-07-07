
var {getUserModel}=require("../models/userModel");
var path=require("path");
var jwt=require("jsonwebtoken");

var UserColRef=getUserModel();

function doSaveUserWithGet(req,resp)
{
        console.log(req.query);
        req.query.picpath="nopic.jpg";
        var userObj=new UserColRef(req.query);
        userObj.save().then((document)=>{
                //resp.send(document)
                resp.json({doc:document,status:true,msg:"Saved Successfully"});

        }).catch((err)=>{
                console.log(err.message);
                //resp.send(err.message)
                resp.json({status:false,msg:err.message});

        })
}
function doSaveUserWithPost(req,resp)
{
        console.log(req.body);
        req.body.picpath=req.body.ppic;

        var userObj=new UserColRef(req.body);
        userObj.save().then((document)=>{
                //resp.send(document)
                resp.json({doc:document,status:true,msg:"Saved Successfully with post"});

        }).catch((err)=>{
                console.log(err.message);
                //resp.send(err.message)
                resp.json({status:false,msg:err.message});

        })
}

function doSaveUserWithPic(req,resp)
{

    let filename="nopic.jpg";
    if(req.files!=null)
    {
        filename=req.files.ppic.name;

        var filepath=path.join(__dirname,"..","uploads",filename);
        req.files.ppic.mv(filepath);
        console.log(filepath)
    }
    else
    console.log(req.files);


    req.body.picpath=filename; //adding a n ew field in body object



    //==========================================
    var userJson=new UserColRef(req.body);

    userJson.save().then((document)=>{

        let jtoken=jwt.sign({uid:req.body.uid},process.env.SEC_KEY,{expiresIn:"1m"});

        resp.json({doc:document,status:true,msg:"Saved Successfully with pic",token:jtoken});
    }).catch((err)=>{
        resp.json({status:false,msg:err.message});
    })
}

function doShowAll(req,resp)
{
    UserColRef.find().then((document)=>{
            resp.send(document)
    }).catch((err)=>{
            console.log(err.message);
            resp.send(err.message)

    })
}

function validateTokenn(req,resp)
{
        console.log("********")
       
       const full_token = req.headers['authorization'];//keyword
        console.log(full_token);
    
        var ary=full_token.split(" ");
        let actualToken=ary[1];
        let isTokenValid;
        
    
        try{
            isTokenValid= jwt.verify(actualToken,process.env.SEC_KEY);
            console.log(isTokenValid);
            if(isTokenValid!=null)
            {
                const payload = jwt.decode(ary[1]);
                console.log(payload);

                resp.json({status:true,msg:"**Aauthorized",item:payload});
            }
            else
            resp.json({status:false,msg:"**SORRRRYYY"});
            
            
        }
        catch(err)
        {
            resp.json({status:false,msg:err.message});
            return;
        }
            
}
async function doDelete(req,resp) {
        UserColRef.deleteOne({ uid: req.body.uid }).then((msg) => {
                if(msg.deletedCount==1)
                resp.json({status: true, message: "Deleted "})
        else
                resp.json({status: true, message: "Invalid ID "})
            }).catch((err) => {
                resp.send(err.message);
            })
}
module.exports={doSaveUserWithGet,doShowAll,doSaveUserWithPost,doSaveUserWithPic,validateTokenn,doDelete}
