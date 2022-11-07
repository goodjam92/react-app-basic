// movie component
import PropTypes from "prop-types";

function MovieComponent({ title, year, coverImg, genres, summary }) {
  return (
    <div>
      <h2>
        {title} ({year})
      </h2>
      <img src={coverImg} alt={title} />
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

MovieComponent.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};

export default MovieComponent;
