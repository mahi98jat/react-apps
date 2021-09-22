import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";

export default function Todo() {
  const [task, setTask] = useState("");
  let [list, setList] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const handleChange = (e) => {
    let text = e.target.value;
    setTask(text);
    text = ""
    
  };
  const handleClick = () => {
    let payload = { title: task, id: uuid(), status: false };

    setList([...list, payload]);
  };
  const markComplete = (id) => {
    let newList = list.map((el) => {
      return el.id === id ? { ...el, status: !el.status } : el;
    });
    setList(newList);
  };
  const removeTask = (id) => {
    let newTaskList = list.filter((el) => {
      return el.id != id;
    });
    setList(newTaskList);
  };
  const handleClick2 = () => {
    setShowCompleted(!showCompleted);
  };
  const ShowCompleted = () => {
    let completed = list.filter((el) => {
      return showCompleted ? el.status === true : null;
    });
    return (
      <div className="show-completed">
        {completed.map((el) => {
          return (
            <div className="cplt-item" key={el.id}>
              {el.title}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <input
        value={task}
        onChange={handleChange}
        value={task}
        type="text"
        placeholder="write your todo here"
      ></input>
      <button onClick={handleClick}>ADD TASK</button>
      <div className="todo-list">
      {list.map((el) => (
        <TodoList data={el} markDone={markComplete} removeTask={removeTask} />
      ))}
      </div>
      <br></br>
      <button onClick={handleClick2}>
        {showCompleted ? "Hide completed todos" : "Show Completed Todos"}
      </button>
      <ShowCompleted />
    </div>
  );
}
// setShowCompleted(!showCompleted);
// if (showCompleted === true) {
//   return renderCompleted();
// }
// return null;
