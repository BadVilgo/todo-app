import React, { useState } from "react";
import Checkbox from "./components/checkbox";
import Filter from "./components/filter";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { text: "Buy something to eat", completed: false },
    { text: "Learn new framework", completed: false },
    { text: "Check your e-mail", completed: false },
  ]);
  const [filterStatus, setFilterStatus] = useState("all");

  const handleToggle = (index) => {
    const updatedTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const addTask = (e) => {
    e.preventDefault();
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText) {
      setTasks([...tasks, { text: taskText, completed: false }]);
      taskInput.value = "";
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === "all") return true;
    if (filterStatus === "notReady") return !task.completed;
    return true;
  });

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My Tasks</h1>
      <form onSubmit={addTask} className="mb-4">
        <div className="input-group">
          <input
            id="taskInput"
            className="form-control"
            type="text"
            placeholder="Add a new task"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Add Task
            </button>
          </div>
        </div>
      </form>
      <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      <ul className="list-group mt-4">
        {filteredTasks.map((task, index) => (
          <li
            className={`list-group-item d-flex align-items-center ${
              task.completed ? "completed" : ""
            }`}
            key={index}
          >
            <Checkbox
              index={index}
              checked={task.completed}
              onToggle={handleToggle}
            />
            <span className="ml-5">{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
