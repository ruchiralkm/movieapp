import React from "react";
import { useState, useEffect } from "react";
import "../App.scss";
import SearchIcon from "../assets/search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=fd416966";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovie("jurassic");
  }, []);

  //------------ Refresh webpage ------------
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="app">
        <h1 onClick={refreshPage} style={{ cursor: "pointer" }}>
          MovieSpace
        </h1>
        <div className="search">
          <input
            type="text"
            name=""
            id=""
            placeholder="Seach any movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt=""
            onClick={() => searchMovie(searchTerm)}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Available</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
