import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "../routes/Detail.module.css";

function DetailCom({
  title,
  coverImg,
  id,
  year,
  rating,
  runtime,
  mpaRating,
  likeCount,
  download,
  genres,
  description,
}) {
  return (
    <div className={styled.html}>
      <div className={styled.title}>
        <header>{title}</header>
        <Link className={styled.link} to={`/`}>
          <span>Back</span>
        </Link>
      </div>
      <div className={styled.contents}>
        <div className={styled.imgbox}>
          <img className={styled.img} src={coverImg} alt={id} />
        </div>
        <div className={styled.descriptionbox}>
          <div>개봉 연도 : {year}년</div>
          <div>관객 평점 : {rating}점</div>
          <div>상영 시간 : {runtime}분</div>
          <div>관람 등급 : {mpaRating ? mpaRating : "미정"}</div>
          <div>👍 : {likeCount} People</div>
          <div>Download Count : {download}</div>
          <div>장르 : {genres.join(", ")} </div>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
}

DetailCom.propTypes = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  likeCount: PropTypes.number.isRequired,
  download: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};

export default DetailCom;
