import React,{useState,useEffect} from 'react';

/*READ ME:
useEffect() works after rendering.
all useEffects() will run always once on first time rendring
*/

function UseEffectJsg() {
    const [fn,setFn]=useState("fname");
    const [ln,setLn]=useState("lname");

    const updateFn=(event)=>{
        setFn(event.target.value);
    }
    
    const updateLn=(event)=>{
        setLn(event.target.value);
    }
    

//will be called every time when state will be updated eg: fn or ln any    
/*useEffect(()=>{
        console.log("Use effect="+fn+" "+ln);
  },[])//once
 */

   //will be called every time when state will be updated eg: fn or ln any    
    useEffect(()=>{
        console.log("Use effect="+fn+" "+ln);
    },[fn,ln])//once
    


  return (
        <>
            <center>
                F.Name <input className='border border-2' type="text" onChange={updateFn} value={fn} />
                <p>
                Last Name <input className='border border-2' type="text" onChange={updateLn} value={ln}/>
                </p>
                <p>
                    {fn}, {ln}
                </p>
            </center>
        </>
  )
}

export default UseEffectJsg;