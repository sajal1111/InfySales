import React, { useState } from 'react'
import { MdOutlineTipsAndUpdates } from "react-icons/md";
function EditToDo(obj) 
{
    let [tsk,setValue]=useState(obj.task);

    function doUpdate()
    {
      obj.doUpdate(obj.id,tsk);
    }

 return (
    
     <div className='flex justify-between items-center bg-gray-200 text-gray-500 py-3 px-4 rounded-md mb-1 cursor-pointer'>
            
            <input type="text" onChange={(ev)=>setValue(ev.target.value)} value={tsk} 
            className='outline-none bg-transparent border border-gray-500 p-2 w-[300] text-black  rounded placeholder:text-gray-200'  />
 
             <div className='flex'>
             <MdOutlineTipsAndUpdates  onClick={doUpdate} className='border border-black size-10 p-2 rounded hover:bg-gray-300' >
                
             </MdOutlineTipsAndUpdates>
             
             </div>
     </div>
     
   )
}

export default EditToDo