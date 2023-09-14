import "./App.css";
import responseMovies from "./mocks/results.json";
import { Movies } from "./components/Movies";
import { useState } from "react";
import { useEffect } from "react";
import { useId } from "react";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(false);
  const isFirstInput = useId(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("La búsqueda no puede estar vacía");
      return;
    }

    if (search.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(false);
  }, [search, isFirstInput]);

  return { search, updateSearch, error };
}
function App() {
  const { search, updateSearch, error } = useSearch();
  const movies = responseMovies.Search;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            onChange={handleChange}
            value={search}
            type="text"
            placeholder="Busca una película"
          />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
