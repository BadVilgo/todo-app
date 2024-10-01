import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState<any | null>(null); // Przechowujemy dane z API
  const [loading, setLoading] = useState<boolean>(true); // Przechowujemy stan ładowania

  // Asynchroniczna funkcja pobierająca dane z API
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/4"
      );
      if (!response.ok) {
        throw new Error("Błąd podczas pobierania danych");
      }
      const result = await response.json(); // Parsujemy odpowiedź jako JSON
      setData(result);
    } catch (error) {
      console.error("Wystąpił błąd podczas pobierania danych:", error);
    } finally {
      setLoading(false); // Ustawiamy stan ładowania na false po pobraniu danych lub błędzie
    }
  };

  // Wywołanie funkcji fetchData po załadowaniu komponentu
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Pobieranie Danych z API</h1>
      {loading ? (
        <p>Ładowanie danych...</p>
      ) : data ? (
        <div>
          <p>
            <strong>ID:</strong> {data.id}
          </p>
          <p>
            <strong>Title:</strong> {data.title}
          </p>
        </div>
      ) : (
        <p>Nie udało się pobrać danych.</p>
      )}
    </div>
  );
}

export default App;
