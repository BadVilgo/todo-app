import React, { useEffect, useState } from "react";
import Greetings from "./Greetings";

const App = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1>Powitanie Props</h1>
      <Greetings imie="Tomek" />
      <Greetings />
    </div>
  );
};

export default App;
