// movie component
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "./movie.module.css";

function MovieComponent({ id, title, year, coverImg, genres, summary }) {
  return (
    <div className={styled.contents}>
      <h2>
        {title} ({year})
      </h2>
      <Link className={styled.link} to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      <ul className={styled.ulist}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p className={styled.summary}>{summary}</p>
    </div>
  );
}

MovieComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};

export default MovieComponent;
