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
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
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
          <h3 className="movie-card-genre">{movie.genre}</h3>
          <h3 className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
