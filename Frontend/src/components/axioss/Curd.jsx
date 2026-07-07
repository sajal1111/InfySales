import React, { useState } from 'react';
import axios from 'axios';

function Curd() {

  const [obj,setObj]=useState({
    uid:"",
    pwd:"",
    dos:"",
    ppic:null   //is an object not a string
})
function doUpdate(event)
{
  var {name,value}=event.target
  setObj({...obj,[name]:value})
  
}
function updatePic(event)
{
 
  setObj({...obj,["ppic"]:event.target.files[0]})
  
}
async function doSave()
{
  let url=`http://localhost:2004/user/saveuser?uid=${obj.uid}&pwd=${obj.pwd}&dos=${obj.dos}&picpath=nopic.jpg`;
    let resp= await axios.get(url);
    //alert(JSON.stringify(resp.data)); 
    if(resp.data.status==true)
        alert(resp.data.msg);
    else
    {
      alert(resp.data.msg);
    }
}

async function doSavePost()
{
  let url="http://localhost:2004/user/saveuserWithPost";
  obj.ppic="nopicc.jpg";
    let resp= await axios.post(url,obj,{headers: {'Content-Type': 'application/x-www-form-urlencoded'  } });
    //alert(JSON.stringify(resp.data)); 
    if(resp.data.status==true)
        alert(resp.data.msg);
    else
    {
      alert(resp.data.msg);
    }
}

async function doSaveWithPic()
{
  let url="http://localhost:2004/user/saveuserWithPic";

  let fd=new FormData();
  for(let prop in obj)
  {
      fd.append(prop,obj[prop]);
  }
    let resp= await axios.post(url,fd,{headers: {'Content-Type': 'multipart/form-data'  } });
    alert(resp.data.token); 
    if(resp.data.status==true)
    {
        alert(resp.data.msg);
        localStorage.setItem("token",resp.data.token);
    }
            else
    {
      alert(resp.data.msg);
    }
}
async function dovalidate()
{
  let url="http://localhost:2004/user/dovalidate";
  let fd=new FormData();
  for(let prop in obj)
  {
      fd.append(prop,obj[prop]);
  }
  fd.append("jtoken", localStorage.token);
  let resp= await axios.post(url,fd,{headers: {'Content-Type': 'multipart/form-data'  } });
    if(resp.data.status==true)
      {
          alert(resp.data.msg);
      }
              else
      {
        alert(resp.data.msg);
      }
    
}

  return (
    <div>
         <center>
        <form >
            <p>
                Email Id <input type="text" name="uid" onChange={doUpdate} />
            </p> <br />
            <p>
                Password<input type="text" name="pwd" onChange={doUpdate}/>
            </p>
            <br />
            <p>
               Dos <input type="date" name="dos" onChange={doUpdate}/>
            </p>
            <br />
            <p>
                Upload Pic : <input type="file" name="ppic" onChange={updatePic} />
                
            </p>
            <p>
              <input type="button" value="Save" onClick={doSave} />  || 
              <input type="button" value=" Save with post " onClick={doSavePost} />
              <input type="button" value=" -- Save with PIC --" onClick={doSaveWithPic} />
              <input type="button" value="--validate--" onClick={dovalidate}/>
              
            </p>   
            </form>
          {JSON.stringify(obj)}
            </center>
    </div>
  )
}

export default Curd;