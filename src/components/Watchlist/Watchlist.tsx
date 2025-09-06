import React from "react";
import "../../styles.css";
import MovieCard, { Movie } from "../MovieCard/MovieCard";

interface WatchlistProps {
  movies: Movie[];
  watchlist: number[];
  toggleWatchlist: any;
}
const Watchlist: React.FC<WatchlistProps> = ({
  movies,
  watchlist,
  toggleWatchlist,
}) => {
  return (
    <div>
      <h1 className="title"> Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          if (!movie) return null; // guard so undefined never passes down
          return (
            <MovieCard
              key={movie?.id}
              movie={movie}
              isWatchlisted={true}
              toggleWatchlist={toggleWatchlist}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  );
};

export default Watchlist;
