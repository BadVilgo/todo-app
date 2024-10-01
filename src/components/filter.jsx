import React, { useState, useEffect } from "react";

const Filter = ({ array }) => {
  // Get all elements with the class name "list-element"
  const listElements = document.getElementsByClassName("list-element");
  const notReadyTasks = () => {
    console.log(listElements);

    // Do rozkminy, stwórz z głowy
    Array.from(listElements).forEach((element) => {
      if (element.classList.contains("line-through")) {
        element.classList.add("hidden");
      }
    });

    console.log(array);
  };

  const AllTasks = () => {
    Array.from(listElements).forEach((element) => {
      if (element.classList.contains("line-through")) {
        element.classList.remove("hidden");
      }
    });
  };

  return (
    <div>
      <button
        className="not-rdy-tasks btn btn-secondary m-1 shadow"
        onClick={notReadyTasks}
      >
        NOT READY TASKS
      </button>
      <button
        className="all-tasks btn btn-secondary m-1 shadow"
        onClick={AllTasks}
      >
        ALL TASKS
      </button>
    </div>
  );
};

export default Filter;
