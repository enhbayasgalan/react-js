import { useState } from "react";
import "./todo.css";

export function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if(newTodo.trim() !== "") {
       setTodos([...todos, {text: newTodo.trim()}]);
       setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  }
   
  return (
    <div className="todo">
      <div className="container">
        <div className="box">
            <div className="todo-text">To-Do list
                <div className="input-container">
                    <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className="input"/>
                    <button onClick={handleAddTodo} className="add">Add</button>
                </div>
                <ul>
                        {todos.map((todo, index) => (
                            <li key={index} style={{display: "flex"}}>
                              <div style={{display: "flex", alignItems: "center"}}>
                              <input type="checkbox" checked={todo.checked} onChange={() => handleToggleTodo(index)}/>
                                <span style={{marginRight: "50px", textDecoration: todo.checked ? "line-through" : "none"}}>{todo.text}</span>
                                <button style={{marginTop: "5px"}} onClick={() => handleDeleteTodo(index)} className="delete">Delete</button>
                              </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
