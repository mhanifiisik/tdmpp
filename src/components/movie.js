import React from "react";
import { Link } from "react-router-dom";

function movie({ movie }) {
  console.log({ movie });
  const { Poster, imdbID, Title } = movie;
  console.log(Poster);
  if (Poster === "N/A") {
    return (
      <Link to={`${imdbID}`}>
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 "
        />
      </Link>
    );
  }
  return (
    <Link to={`${imdbID}`} className="flex flex-col gap-1">
      <img className="w-full h-full object-cover" src={Poster} alt={Title} />
    </Link>
  );
}

export default movie;
