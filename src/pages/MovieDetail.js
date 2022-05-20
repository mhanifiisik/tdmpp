import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=9ff40631`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [imdbID]);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-4xl  sm:mx-auto">
        <div className="bg-white shadow-lg  border-gray-100 	 border sm:rounded-3xl p-8 flex space-x-8">
          <div className="h-48 overflow-visible w-1/2">
            <img
              className="rounded-3xl shadow-lg"
              src={
                movie.Poster === "N/A"
                  ? "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  : movie.Poster
              }
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">{movie.Title}</h2>
              <div className="bg-purple-400 font-bold rounded-xl p-2 text-white">
                {movie.imdbRating}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400">{movie.Genre}</div>
              <div className="text-lg text-gray-800">{movie.Released}</div>
            </div>
            <p className=" text-gray-400 max-h-40 overflow-y-scroll">
              {movie.Plot === "N/A" ? "loremipsum" : movie.PLlot}
            </p>
            <div className="flex text-2xl font-bold text-a">
              {movie.Language}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
