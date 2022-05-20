import React, { useState, useEffect } from "react";
import MovieCard from "../components/movie";
import banner from "../assets/159Z_2107.w026.n002.628B.p1.628.jpg";
import { BiSearchAlt } from "react-icons/bi";
function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://omdbapi.com/?s=${search}&apikey=9ff40631`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  };

  return (
    <section className="">
      <img className="h-72 w-full object-cover" src={banner} alt="banner" />
      <div className="max-w-7xl mx-auto relative grid place-items-center">
        <form
          className="absolute -top-12 w-[600px] h-20 flex flex-row justify-between items-center gap-1 bg-[#f1f2f6] shadow-lg rounded px-5"
          onSubmit={handleSubmit}
        >
          <BiSearchAlt />
          <input
            className="p-2 w-full outline-none bg-transparent"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a movie"
          />
          <button
            className="rounded bg-purple-600 text-white font-bold px-3 py-2"
            type="submit"
          >
            Search
          </button>
        </form>

        <div className="grid grid-cols-5 gap-2 mt-16 mb-1">
          {movies?.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
