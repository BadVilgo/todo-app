import React, { useEffect, useState } from "react";

const App = () => {
  let [licznik, setLicznik] = useState(0);
  const increment = () => {
    setLicznik(licznik + 1);
  };

  useState(licznik);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1>Licznik</h1>
      <p>{licznik}</p>
      <button className="btn btn-primary" onClick={increment}>
        Kliknij
      </button>
    </div>
  );
};

export default App;
