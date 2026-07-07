import React, { useRef } from 'react'
import "./frm.css";
function FormBtn()
 {
    let refBoth=useRef(null);//use is a hook

    function doClick(event)
    {
        alert(email+"   "+pwd);;
    }

    let email,pwd;
    function doFillEmail(event)
    {
             email=event.target.value;
    }
    function doFillPwd(event)
    {
             pwd=event.target.value;
    }
    function doFillBoth()
    {
            refBoth.current.value=email;
    }
  return (
    <div className='outer' >
        <div>Signup With Button</div>
        <hr />
        <center>
        <form  >
            <p>
                Emil ID <br />
                <input type="text"  name="txtEmail" onInput={doFillEmail} />
            </p>
            <p>
                Password <br />
                <input type="password" name="txtPwd"  onInput={doFillPwd} />
            </p>
            <p>
                <input type="button" onClick={doClick} value="Signup Here" />
                <input type="button" onClick={(event)=>{alert(event.target.value)}} value="Signup Here again" />
                <input type="button" onClick={doFillBoth} value="result" />
            </p>
            <p>
            <input type="text" ref={refBoth} name="txtBoth" placeholder='Result'   />
            </p>
            <div>**{email}</div>
        </form>
        </center>
    </div>
  )
}

export default FormBtn;