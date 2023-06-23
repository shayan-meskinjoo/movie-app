import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovie, fetchAsyncShows } from "./features/slices/moviesSlice";
import MovieListing from "./MovieListing";

export default function Home() {
  const dispatch = useDispatch();
  const movieSearch = "Harry"
  const showSearch = "Friends"

  useEffect(() => {
    dispatch(fetchAsyncMovie(movieSearch))
    dispatch(fetchAsyncShows(showSearch))
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  );
}
