import "./todo.css";

export function Todo() {
  return (
    <div className="todo">
      <div className="container">
        <div className="box">
            <div className="todo-text">To-Do list
                <div className="input-container">
                    <input className="button"></input>
                    <div className="button-2">
                        <div className="bichig">Add</div>
                    </div>
                </div> 
                <div className="filter-container">
                  
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}