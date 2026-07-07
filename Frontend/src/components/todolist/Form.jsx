import React from 'react'

function Form({doAddFx}) {

    function doAddTask(event)
    {
        event.preventDefault();
        doAddFx(event.target.txtBox.value);
    }
  return (

    <div>
        <form className='mb-4 font-mono w-full' onSubmit={doAddTask}>
            <input type="text" name="txtBox" className='outline-none bg-transparent border border-gray-500 p-4 w-[300] text-white mb-8 rounded placeholder:text-gray-200' placeholder='what to do' />
            <button className='bg-gray-200 border-none p-2 text-gray-500 cursor-pointer rounded ml-2'>
            Add Task
        </button>
        </form>
    </div>
  )
}

export default Form;