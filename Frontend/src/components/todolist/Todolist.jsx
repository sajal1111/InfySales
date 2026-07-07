import React, { useState } from 'react'
import Form from './Form';
import { nanoid } from 'nanoid';
import ToDo from './ToDo';
import EditToDo from './EditToDo';

function ToDoList() {

    let [jsonList,setList]=useState([]);//array of objs

    function addinList(tsk)
    {
        // alert(tsk);
        let unqid=nanoid(4);
        setList([...jsonList,{id:unqid,"task":tsk,edit:false}])
    }
    function doDelete(id)
    {
        //let newJson=jsonList.filter((obj)=>obj.id!=id);
        //setList(newJson);
        setList(jsonList.filter((obj)=>obj.id!=id));
    }
function doEdit(id)
{
    alert(id);
    let nw=jsonList.map((obj)=>{
        if(obj.id==id)
                obj.edit=true;
        return obj;

    })
    setList(nw);
}

function doUpdate(id,task)
{
    
    let nw=jsonList.map((obj)=>{
        if(obj.id==id)
                {
                    obj.edit=false;
                    obj.task=task;
                }
        return obj;

    })
    setList(nw);
}

  return (
    <div className='w-[400px] mx-auto bg-gray-700 p-8 rounded-md '>
        <Form doAddFx={addinList}></Form> 
        {
            jsonList.map((obj)=>{
                    return  obj.edit?<EditToDo {...obj} doUpdate={doUpdate}></EditToDo>:<ToDo {...obj} doDelete={doDelete} doEdit={doEdit} ></ToDo>
                                })

            
        }       
    </div>
  )
}

export default ToDoList