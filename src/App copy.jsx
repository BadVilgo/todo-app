import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  let task;
  const [array, setArray] = useState(["always", "naturella", "zzzquil"]);
  const listArray = array.map((element, index) => (
    <li
      className="list-element list-group-item text-center line-through"
      key={index}
    >
      <input
        type="checkbox"
        className="form-check-input"
        onChenge="{handleCheckboxChange}"
      />
      {element}
    </li>
  ));

  const addTask = () => {
    let task = document.getElementsByClassName("inputValue")[0].value;
    if (task) {
      setArray([...array, task]);
    }
  };
  // OLD
  // NEW
  const listElement = document.getElementsByClassName("list-element");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    if (event.target.checked) {
    }
  };
  //button on click

  //if (listElement.classList.contains("line-through")) {} else {};

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1 className="m-5">MY TASKS</h1>
      <p className="">Add a new task: </p>
      <input className=" inputValue" type="text"></input>
      <button className="btn btn-primary mt-2 shadow" onClick={addTask}>
        Dodaj task
      </button>
      <ul className="list-group w-25 m-5 shadow">{listArray}</ul>
      <div>
        <button
          className="not-rdy-tasks btn btn-secondary m-1 shadow"
          onClick="{showNotRdyTasks}"
        >
          NOT READY TASKS
        </button>
        <button
          className="all-tasks btn btn-secondary m-1 shadow"
          onClick="{showAllTasks}"
        >
          ALL TASKS
        </button>
      </div>
    </div>
  );
};

export default App;

// EVENT LISTENER
// checkmark checked === add className "line-through"

//SET STATUS
// if li className != "line-through" setStatus active
// else setStatus inactive

// show ALL TASKS vs SHOW NOT DONE TASKS
// onClick btn "ALL TASKS" show all tasks | display != none
// onClick btn "ACTIVE TASKS" show only active tasks, other display: none;
