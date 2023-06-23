import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovie, fetchAsyncShows } from "./features/slices/moviesSlice";
import MovieListing from "./MovieListing";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovie("Harry"))
    dispatch(fetchAsyncShows("Friends"))
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  );
}
