import React from "react";
import github from "./images/github_PNG37.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <h4>Movie App all right reserved</h4>
      <a href="https://github.com/shayan-meskinjoo/movie-app" target="_blank">
        <img src={github}></img>
      </a>
    </div>
  );
}
