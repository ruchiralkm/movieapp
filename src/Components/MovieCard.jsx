//import { motion } from "framer-motion";
import React from "react";

function MovieCard({ movie: { imdbID, Year, Poster, Title, Type } }) {
  return (
    <>
      <div className="movie" style={{ cursor: "pointer" }} key={imdbID}>
        <div>
          <h3>{Year}</h3>
        </div>
        <div>
          <img
            src={
              Poster !== "N/A"
                ? Poster
                : "https://th.bing.com/th/id/R.03e713c84818c99d0285a2eb49a33d52?rik=J7JMHNZXqBdJjw&riu=http%3a%2f%2fwww.fubiz.net%2fwp-content%2fuploads%2f2015%2f03%2fForrest-Gump.jpg&ehk=FhWxY24g1daJzM2xwBeTHURDp%2fcxAHNFHumkwsppbO4%3d&risl=&pid=ImgRaw&r=0"
            }
            alt={Title}
          />
        </div>

        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
