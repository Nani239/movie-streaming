import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies = ({ response }) => {
  const [movies, setMovies] = useState(response.movies);
  const Crime = movies.filter((mv) => mv.genres.includes("Crime"));
  const Drama = movies.filter((mv) => mv.genres.includes("Drama"));
  const Romance = movies.filter((mv) => mv.genres.includes("Romance"));
  const Adventure = movies.filter((mv) => mv.genres.includes("Adventure"));
  const Animation = movies.filter((mv) => mv.genres.includes("Animation"));
  const Action = movies.filter((mv) => mv.genres.includes("Action"));
  const Biography = movies.filter((mv) => mv.genres.includes("Biography"));

  //Facing CORS issue
  //   const fetchMovies = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://projects.raisonminds.com/api/data.json",
  //         {
  //           headers: {
  //             "Authorization": `Bearer k_sudl4l70`,
  //           },
  //         }
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       setMovies(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchMovies();
  //   }, []);

  return (
    <>
      <div className="row">
        <h2>Action</h2>
        <div className="movies">
          <Movie movieProp={Action} />
        </div>
      </div>
      <div className="row">
        <h2>Crime</h2>
        <div className="movies">
          <Movie movieProp={Crime} />
        </div>
      </div>
      <div className="row">
        <h2>Drama</h2>
        <div className="movies">
          <Movie movieProp={Drama} />
        </div>
      </div>
      <div className="row">
        <h2>Romance</h2>
        <div className="movies">
          <Movie movieProp={Romance} />
        </div>
      </div>
      <div className="row">
        <h2>Adventure</h2>
        <div className="movies">
          <Movie movieProp={Adventure} />
        </div>
      </div>
      <div className="row">
        <h2>Animation</h2>
        <div className="movies">
          <Movie movieProp={Animation} />
        </div>
      </div>
      <div className="row">
        <h2>Biography</h2>
        <div className="movies">
          <Movie movieProp={Biography} />
        </div>
      </div>
    </>
  );
};

export default Movies;
