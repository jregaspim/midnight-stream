import React from "react";
import "../../styles.css";

export interface Movie {
  id: number;
  title: string;
  image: string;
  genre: string;
  rating: number;
}

interface MovieCardProps {
  movie: Movie;
  isWatchlisted: boolean;
  toggleWatchlist: any;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  isWatchlisted,
  toggleWatchlist,
}) => {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = "images/default.jpg";
  };

  const getRatingClass = (rating: number) => {
    if (rating >= 8) return "rating-good";
    if (rating >= 5 && rating < 8) return "rating-ok";
    return "rating-bad";
  };

  return (
    <div>
      <div key={movie.id} className="movie-card">
        <img
          src={`images/${movie.image}`}
          alt={movie.title}
          onError={handleImageError}
        />
        <div className="movie-card-info">
          <h3 className="movie-card-title">{movie.title}</h3>
          <div>
            <span className="movie-card-genre">{movie.genre}</span>
            <span
              className={`movie-card-rating ${getRatingClass(movie.rating)}`}
            >
              {movie.rating}
            </span>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={isWatchlisted}
              onChange={() => toggleWatchlist(movie.id)}
            ></input>
            <span className="slider">
              <span className="slider-label">
                {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
