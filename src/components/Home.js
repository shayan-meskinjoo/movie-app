import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovie,
  fetchAsyncShows,
} from "./features/slices/moviesSlice";
import MovieListing from "./MovieListing";
import Loading from "./Loading";

export default function Home() {
  const dispatch = useDispatch();
  const movieSearch = "Harry";
  const showSearch = "Friends";

  const loading = useSelector((state) => state.movies.isLoading);

  useEffect(() => {
    dispatch(fetchAsyncMovie(movieSearch));
    dispatch(fetchAsyncShows(showSearch));
  }, [dispatch]);

  return <div>{loading ? <Loading /> : <MovieListing />}</div>;
}
