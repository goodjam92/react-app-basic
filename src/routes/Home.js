import { useState, useEffect } from "react";
import MovieComponent from "../components/MovieCom";
import homeStyled from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
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
        <div className={homeStyled.main}>
          <h1 className={homeStyled.title}>HELLO MOVIE WORLD!!</h1>
          {movies.map((movie) => (
            <MovieComponent
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              genres={movie.genres}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
