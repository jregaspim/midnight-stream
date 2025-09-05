import React from "react";
import "../../styles.css";

interface Movie {
  id: number;
  title: string;
  image: string;
  genre: string;
  rating: number;
}

interface MovieCardProps {
  movie: Movie;
}
export default function MovieCard({ movie }: MovieCardProps) {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = "images/default.jpg";
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
          <h3 className="movei-card-title">{movie.title}</h3>
          <h3 className="movei-card-genre">{movie.genre}</h3>
          <h3 className="movei-card-rating">{movie.rating}</h3>
        </div>
      </div>
    </div>
  );
}
