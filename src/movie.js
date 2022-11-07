import { useState, useEffect } from "react";
import { isCompositeComponent } from "react-dom/test-utils";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h2>
                {movie.title} ({movie.year})
              </h2>
              <img src={movie.medium_cover_image} alt="cover" />
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
              <p>{movie.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;