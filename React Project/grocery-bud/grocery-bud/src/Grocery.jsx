import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Grocery() {

    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const [completedTask, setCompletedTask] = useState([]);

    // console.log(inputValue);
    // console.log(tasks);

    function handleSubmit(e) {
        e.preventDefault();

        if (inputValue.trim() === "") {
            toast.error("Please fill in the input field", { autoClose: 2000 });
            return;
        }

        let obj = {};
        obj.task = inputValue;
        obj.id = Date.now();



        setTasks([...tasks, obj]);
        setInputValue("");
        toast.success("Item added to the list", { autoClose: 2000 });
    }

    function handleDelete(idToDelete) {
        setTasks(
            tasks.filter((task) => {
                return task.id !== idToDelete;
            })
        )
        toast.info("Item deleted from the list", { autoClose: 2000 });
    }

    function handleCompleted(idToComplete) {
        console.log(idToComplete);
        if (completedTask.includes(idToComplete)) {
            setCompletedTask(completedTask.filter(id => id !== idToComplete));
            toast.info("Item marked as incomplete", { autoClose: 2000 });
        } else {
            setCompletedTask([...completedTask, idToComplete]);
            toast.success("Item marked as complete", { autoClose: 2000 });
        }

    }

    useEffect( ()=>{
       if(tasks.length > 0){
        localStorage.setItem("tasks" , JSON.stringify(tasks));
       }
    } , [tasks])

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("tasks"));
        if(data)
            setTasks(data);
    },[])

    return (
        <>
            <div className='container'>
                <div className='groceryContainer'>
                    <form action="" onSubmit={handleSubmit}>
                        <h1>Grocery Bud</h1>
                        <input type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}

                        />
                        <button>Add items</button>
                    </form>

                    <ul className='groceryList'>
                        {
                            tasks.map((item, index) => {
                                return <li key={index} >
                                    <div className='listname' style={completedTask.includes(item.id) ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
                                        <input type="checkbox" onClick={() => handleCompleted(item.id)} />
                                        {item.task}
                                    </div>

                                    <button onClick={() => handleDelete(item.id)}>Delete</button>

                                </li>
                            })
                        }
                    </ul>
                </div>

            </div>
            <ToastContainer position="top-center" />

        </>
    )
}

export default Grocery