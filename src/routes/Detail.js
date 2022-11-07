import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "./Detail.module.css";

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
        <div className={styled.html}>
          <div className={styled.title}>
            <header>{theMovie.title}</header>
            <Link className={styled.link} to={`/`}>
              <span>Back</span>
            </Link>
          </div>
          <div className={styled.contents}>
            <div className={styled.imgbox}>
              <img
                className={styled.img}
                src={theMovie.large_cover_image}
                alt={theMovie.id}
              />
            </div>
            <div className={styled.descriptionbox}>
              <div>개봉 연도 : {theMovie.year}년</div>
              <div>관객 평점 : {theMovie.rating}점</div>
              <div>상영 시간 : {theMovie.runtime}분</div>
              <div>관람 등급 : {theMovie.mpa_rating}</div>
              <div>👍 : {theMovie.like_count} People</div>
              <div>Download Count : {theMovie.download_count}</div>
              <div>장르 : {theMovie.genres.join(", ")} </div>
              <span>{theMovie.description_intro}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
