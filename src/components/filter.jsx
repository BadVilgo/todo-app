import React from "react";

const Filter = ({ filterStatus, setFilterStatus }) => {
  return (
    <div className="btn-group">
      <button
        className={`btn ${
          filterStatus === "all" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={() => setFilterStatus("all")}
      >
        All Tasks
      </button>
      <button
        className={`btn ${
          filterStatus === "notReady" ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={() => setFilterStatus("notReady")}
      >
        Not Completed
      </button>
    </div>
  );
};

export default Filter;
