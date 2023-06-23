import React from "react";
import { Link } from "react-router-dom"

export default function MovieCard({ data }) {
  return (
    <Link to={`movie/${data.imdbID}`}>
      <div className="movie-card">
        <img src={data.Poster}></img>
        <p>{data.Title}</p>
        <h5>{data.Year}</h5>
      </div>
    </Link>
  );
}
