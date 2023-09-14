import "./App.css";
import responseMovies from "./mocks/results.json";

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form">
          <input type="text" placeholder="Busca una película" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        {hasMovies ? (
          <ul className="movies">
            {movies.map((movie) => (
              <li key={movie.imdbID} className="movie">
                <img src={movie.Poster} alt={movie.Title} />
                <div className="movie__info">
                  <h2>{movie.Title}</h2>
                  <p>{movie.Year}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty">No hay películas para mostrar</p>
        )}
      </main>
    </div>
  );
}

export default App;
