import React, { useState, useEffect } from "react";
import "../../styles.css";
import MovieCard, { Movie } from "../MovieCard/MovieCard";

interface MoviesGridProps {
  movies: Movie[];
}

const MoviesGrid: React.FC<MoviesGridProps> = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenre] = useState("All Genres");
  const [ratingFilter, setRating] = useState("All");

  const handleSearchChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const handleGenreFilterChange = (
    e: React.SyntheticEvent<HTMLSelectElement>
  ) => {
    setGenre(e.currentTarget.value);
  };

  const handleRatingilterChange = (
    e: React.SyntheticEvent<HTMLSelectElement>
  ) => {
    setRating(e.currentTarget.value);
  };

  const filterBySearch = (movie: Movie, searchTerm: string) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filterByGenre = (movie: Movie, genreFilter: string) => {
    if (genreFilter === "All Genres") return true;
    return movie.genre.toLowerCase() === genreFilter.toLowerCase();
  };

  const filterByRating = (movie: Movie, ratingFilter: string) => {
    if (ratingFilter === "Good") return movie.rating > 8;
    if (ratingFilter === "Ok") return movie.rating >= 5 && movie.rating < 8;
    if (ratingFilter === "Bad") return movie.rating < 5;
    return true; // default (show all)
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movie..."
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            onChange={handleGenreFilterChange}
            value={genreFilter}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={ratingFilter}
            onChange={handleRatingilterChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {movies
          .filter((movie) => filterBySearch(movie, searchTerm))
          .filter((movie) => filterByGenre(movie, genreFilter))
          .filter((movie) => filterByRating(movie, ratingFilter))
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
