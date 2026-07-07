import React, { useState } from 'react'

function State3() 
{
    //                            default value of fn
    var [obj,setObject]=useState({fn:"first",ln:"last"});//fn is a var  and setName() is afunction resp. to update the value of fn
    

    function changeValue(event)
    {
        var {name,value}=event.target;
        
        // alert(name+"  "+value);
        //setObject({name:value})
            setObject({...obj,[name]:value})
        

    }
    
  return (
        <div>
            <p>
                F.Name of 2nd 
                <input type="text" name="fn" onChange={changeValue} />
                <p>
                (textBox Name and property name in object must be same)
                </p>
            </p>
            <p>
                L.Name
                <input type="text" name="ln" onInput={changeValue} />
            </p>
            <p>
                <input type="button" value="Change Default Value"  />
            </p>
            <div>
                {JSON.stringify(obj)}
                
            </div>
            
        </div>
  )
}

export default State3;