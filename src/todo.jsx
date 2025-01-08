import { useState } from "react";
import "./todo.css";


export function Todo() {
   const [todos, setTodos] = useState([]);
   
   const [error, setError] = useState(false);

   const [inputValue, setInputValue] = useState("");

   const [filterState, setFilterState] = useState("ALL");

   

   const handleInputChange = (e) => {
       setInputValue(e.target.value);
   };

   const handleAddTaskButton = () => {
    if (inputValue.length === 0) {
      setError(true);
    } else {
      setError(false);
      setTodos([...todos, { description: inputValue,  status:"ACTIVE",}]);
      setInputValue("");
    }
   };

   const handleDeleteTodo = (todo) => {
    const newTodos = [...todos];
    newTodos.splice(todo, 1);
    setTodos(newTodos);
   }
   
     
   const handleTaskCheckBox  = (id) => {
      const tasks = todos.map((todo) => {
        if(todo.id === id ){
          return{...todo, status: "COMPLETED" };
        } else  {
          return todo;
        }
      });
      setTodos(tasks);
   }; 
   const handleFilterChangeState = (state) => {
    console.log(state);
    setFilterState(state);
   }
   console.log(filterState)

  return (
    <div className="todo">
      <div className="container">
        <div className="box">
            <div className="todo-text">To-Do list
                <div className="input-container">
                    {error && <div>please enter</div>}
                    <input 
                    placeholder={"Add task"} 
                    value={inputValue} 
                    className="input" 
                    onChange={handleInputChange}
                    />
                    <button className="add" onClick={handleAddTaskButton}>Add</button> 
                </div>
                <div className="all">
                      <button onClick={() => handleFilterChangeState("ALL")} style={{color: filterState === "ALL" ? "blue" : "black"}} className="AL">ALL</button>
                      <button onClick={() => handleFilterChangeState("ACTIVE")} style={{color: filterState === "ACTIVE" ? "blue" : "black"}} className="AL">ACTIVE</button>
                      <button onClick={() => handleFilterChangeState("COMPLETED")} style={{color: filterState === "COMPLETED" ? "blue" : "black"}} className="AL">COMPLETED</button>
                      <button onClick={() => handleFilterChangeState("LOG")} style={{color: filterState === "LOG" ? "blue" : "black"}} className="AL">LOG</button>
                </div>
                <div className="filter-container">
                {todos.filter((todo) => {
                  if(filterState === "ACTIVE"){
                    return todo.status === "ACTIVE"; 
                  }else if (filterState === "COMPLETED") {
                    return todo.status === "COMPLETED"; 
                  } else {
                    return true;
                  }
                })
                .map((todo) => {
                      return (
                        <div className="enter">
                          <div style={{display: "flex", gap: "20px"}}>
                              
                            <input type="checkbox" onChange={() => handleTaskCheckBox(todo.id)}/>
                            <p style={{maxWidth: "200px", overflow: "scroll"}}>   {todo.description}</p>
                     
                          </div>
                       
                        <button onClick={() => handleDeleteTodo(todo)} className="delete" >Delete</button>
                        </div>
                      );  
                    })}
                 </div>
                 <p className="p">No tasks yet. Add one above!</p>
            </div>
        </div>
      </div>
    </div>
  );
}
