import React from "react";
import "./topbar.css";
import { useNavigate } from "react-router-dom";

function TopBar({isLoggedIn,doUpdateStatus}) 
{
    let doRedirect=useNavigate();

  function doNavigate(path)
  {
      doRedirect(path);
  }
  function doLoginLogout(flag)
  {
    let status=(flag==1?true:false);
    doUpdateStatus(status);
    if(status==true)
    {
      doRedirect("/login");
    }
    else
    {
      doRedirect("/");
    }


  }


  return (
      
        <div class="menu-div" >
          <div className="title mr"> www.realjava.com </div>
          <div className="title">
            <div className="menu-item btn" onClick={()=>doNavigate("/")} >
              Home
            </div>
            <div className="menu-item btn" onClick={()=>doNavigate("/signup")} >
              Signup
            </div>
            {
                isLoggedIn?<div className="menu-item btn" onClick={()=>doLoginLogout(0)} > Log Out</div>:<div className="menu-item btn" onClick={()=>doLoginLogout(1)} > Login</div>
            }

          </div>
        </div>
    
   
  );
}

export default TopBar;
