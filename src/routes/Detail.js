import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "./Detail.module.css";
import DetailCom from "../components/DetailComponents.js";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [theMovie, setTheMovie] = useState({});

  const { id } = useParams();
  const getTheMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setTheMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getTheMovie();
  }, []);
  console.log(theMovie);
  return (
    <div>
      {loading ? (
        <h1 className={styled.loading}>Loading...</h1>
      ) : (
        <DetailCom
          key={theMovie.id}
          title={theMovie.title}
          coverImg={theMovie.large_cover_image}
          id={theMovie.id}
          year={theMovie.year}
          rating={theMovie.rating}
          runtime={theMovie.runtime}
          mpaRating={theMovie.mpa_rating}
          likeCount={theMovie.like_count}
          download={theMovie.download_count}
          genres={theMovie.genres}
          description={theMovie.description_intro}
        />
      )}
    </div>
  );
}

export default Detail;
