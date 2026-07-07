import React from 'react';
import { MdOutlineAutoDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function ToDo(obj) 
{
  return (
    <div className='flex justify-between items-center bg-gray-200 text-gray-500 py-3 px-4 rounded-md mb-1 cursor-pointer'>
            {obj.task}

            <div className='flex'>
            <MdOutlineAutoDelete onClick={()=>obj.doDelete(obj.id)} className='border border-black size-10 p-2 rounded hover:bg-gray-300'></MdOutlineAutoDelete>
            <FaEdit onClick={()=>obj.doEdit(obj.id)} className='border border-black size-10 p-2 rounded hover:bg-gray-300 ml-1'></FaEdit>
            </div>
    </div>
  )
}

export default ToDo