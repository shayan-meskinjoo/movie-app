import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "./features/slices/moviesSlice";
import MovieCard from "./MovieCard";

export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows)

  let renderMovies, renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie) => <MovieCard key={movie.imdbID} data={movie} />)
    ) : (
      <div>
        <h3>{movies.Error}</h3>
      </div>
  );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show) => <MovieCard key={show.imdbID} data={show} />)
    ) : (
      <div>
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movies-container">
      <h1>Movies</h1>
      <div className="movies-list">{renderMovies}</div>
      <h1 className="shows">Shows</h1>
      <div className="movies-list">{renderShows}</div>
    </div>
  );
}
