import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovie, fetchAsyncShows } from "./features/slices/moviesSlice";


export default function Header() {
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(fetchAsyncMovie(search))
    dispatch(fetchAsyncShows(search))

    setSearch("")
  }
  
  return (
    <div className="header">
      <h2 className="header__logo">Movie generator</h2>
      <div className="search">
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Search for movie or show" value={search} onChange={e => setSearch(e.target.value)}></input>
          <button type="submit">search</button>
        </form>
      </div>
    </div>
  );
}
