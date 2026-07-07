import React, { useState } from 'react'

function UseStates() 
{
    //                            default value of fn
    var [fn,setFName]=useState("FN");//fn is a var  and setName() is afunction resp. to update the value of fn
    var [ln,setLName]=useState();


    function doChange()
    {
        setFName("Bale Bale");
    }

    console.log("Rendered")

    
    function changeFN(event)
    {
            setFName(event.target.value);
    }
    function changeLN(event)
    {
            setLName(event.target.value);
    }
  return (
        <div>
            <p>
                F.Name
                <input type="text" onChange={changeFN} />
            </p>
            <p>
                L.Name
                <input type="text" onInput={changeLN} />
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

export default UseStates