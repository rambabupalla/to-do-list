
import React, {useState} from "react"

function ToDoList(){

    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");


    function handleInput(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTask(tasks=>[...tasks,newTask]);
            setNewTask("");
        }
    }

    function delTask(index){

        const updatedTasks = tasks.filter((_, i)=> i!== index);
        setTask(updatedTasks);
    }

    function moveTaskUp(index){
        if(index>0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
        setTask(updatedTasks);
        }
    }


    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTask(updatedTasks);
        }
        
    }


    return(

        <>
            <div className="container">
                <h1>To Do List</h1>
                <div className="task">
                    <input type="text" placeholder="Enter a Task" value={newTask} onChange={handleInput}></input>
                    <button className="add" onClick={addTask}>Add</button>
                </div>
                <ol>
                    {tasks.map((task,index) =>
                     <li key={index}>
                        <span className="text">{task}</span>
                        <button className="del-btn" onClick={()=>delTask(index)}>Delete</button>
                        <button className="up-btn" onClick={()=>moveTaskUp(index)}>Move Up</button>
                        <button className="down-btn" onClick={()=>moveTaskDown(index)}>Move Down</button></li>)}
                        
                </ol>
            </div>
        </>
    )
}
 
export default ToDoList