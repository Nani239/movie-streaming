import React from "react";
import "./Movie.css";

const Movie = ({ movieProp }) => {
  return (
    <>
      {movieProp?.map((item) => (
        <div className="movie">
          <img src={item.posterUrl} />
        </div>
      ))}
    </>
  );
};

export default Movie;
