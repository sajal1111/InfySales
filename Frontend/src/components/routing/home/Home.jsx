import React from 'react';
import './hcards.css';

function Home() {
  return (
    <div>
        <br />
        <br /><br />
    
    <center>
      <div style={{backgroundColor:'red',color:'white'}}>
       <span><b><u>Read Me:</u></b></span> 1.) In this application in different web forms different ways are used to collect different <br></br> 
        ways to Collect Data from different components.
        <hr /><br />
        2). try to use serch box in menu bar above.
        <br />
        3). Click on Login Button and fill data in Login Form , then login button will be converted to LOGOUT button.

      </div>
    </center>
    <div className='container'>
      <div className='card'></div>
      <div className='card'></div>
      <div className='card'></div>
    </div>
    </div>
  )
}

export default Home;