import React from "react";
import { useState, useEffect } from "react";
import "../App.scss";
import SearchIcon from "../assets/search.svg";
import MovieCard from "./MovieCard";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const API_URL = "http://www.omdbapi.com/?apikey=fd416966";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const notify = () => toast.success(`You searched "${searchTerm}"`);

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovie("jurassic");
  }, []);

  return (
    <>
      <div className="app">
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 1.2,
            type: "spring",
          }}
          className="search"
        >
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
            onClick={() => {
              searchMovie(searchTerm);
              notify();
            }}
          />
          <Toaster />
        </motion.div>

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
      <div className="gradient"></div>
    </>
  );
}

export default Home;
