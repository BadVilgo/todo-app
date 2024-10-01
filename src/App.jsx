import React, { useState, useEffect } from "react";
import Checkbox from "./components/checkbox";
import Filter from "./components/filter";
import "./App.css";

const App = () => {
  const [array, setArray] = useState(["always", "naturella", "zzzquil"]);
  const [checkedStatus, setCheckedStatus] = useState(array.map(() => false));

  const handleToggle = (index) => {
    const updatedStatus = [...checkedStatus];
    updatedStatus[index] = !updatedStatus[index];
    setCheckedStatus(updatedStatus);
  };

  const listArray = array.map((element, index) => (
    <li
      className={`list-element list-group-item text-center ${
        checkedStatus[index] ? "line-through" : ""
      }`}
      key={index}
    >
      <Checkbox index={index} onToggle={handleToggle} />
      {element}
    </li>
  ));

  const addTask = () => {
    let task = document.getElementsByClassName("inputValue")[0].value;
    if (task) {
      setArray([...array, task]);
      setCheckedStatus([...checkedStatus, false]);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1 className="m-5">MY TASKS</h1>
      <p className="">Add a new task: </p>
      <input className="inputValue" type="text" />
      <button className="btn btn-primary mt-2 shadow" onClick={addTask}>
        ADD TASK
      </button>
      <div className="d-flex mt-5 align-items-center">
        <p className="mr-2 mb-0">Show: </p>
        <Filter array={array} />
      </div>
      <ul className="list-group w-25 mt-5 shadow mb-5">{listArray}</ul>
    </div>
  );
};

export default App;
