import React from 'react'

function Styling() 
{
    let cardStyle={height:"300px",
                    width:"200px", 
                    backgroundColor:"yellow",
                    float:"left"
                }
  return(
    <div >
    <div  style={{height:"300px",width:"200px", backgroundColor:"orange",float:"left"}}>
        Styling
    </div>
    <div  style={cardStyle}>
        Styling
    </div>
    
    </div>

  )
};

export default Styling;