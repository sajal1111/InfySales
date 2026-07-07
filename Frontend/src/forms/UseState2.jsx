import React, { useState } from 'react'

function UseState2() 
{
    //                            default value of fn
    var [fn,setFName]=useState("FN");//fn is a var  and setName() is afunction resp. to update the value of fn
    var [ln,setLName]=useState();


    function doChange()
    {
        setFName("Bale Bale");
    }

    console.log("Rendered")

    
    function changeValue(event)
    {
        console.log(event)
            // setFName(event.target.value);
            
            var {name,value}=event.target;

            console.log(name+"   "+value)
            if(name==="txtFN")
                   setFName(value) ;
            else
            if(name=="txtLN")
                setLName(value);
    }
    
  return (
        <div>
            <p>
                F.Name of 2nd 
                <input type="text" name="txtFN" onChange={changeValue} />
            </p>
            <p>
                L.Name
                <input type="text" name="txtLN" onInput={changeValue} />
            </p>
            <p>
                <input type="button" value="Change Default Value" onClick={doChange} />
            </p>
            <div>
                {fn} <br></br>
                {ln}
                
            </div>
            
        </div>
  )
}

export default UseState2;