import React, { useEffect, useState } from "react";
import Search from "./components/search";
import MovieCard from "./components/MovieCard";
import {useDebounce} from 'react-use';
import { UpdateSearchCount, getTrendingMovies } from "./appwrite.js";
import Footer from "./components/Footer.jsx";
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const [TrendingMovies, setTrendingMovies] = useState([]);
  const [Movies, setMovies] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [debouncedSearchTerm, setdebouncedSearchTerm] = useState('');
  useDebounce(()=>setdebouncedSearchTerm(searchTerm),500, [searchTerm])

  const fetchMovies = async (query = "") => {
    setLoading(true);
    seterrorMessage("");
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("failed to fetch movies");
      }
      const data = await response.json();

      if (data.response == "False") {
        setErrorMessage(data.Error || "failed to fetch movies");
        setMovies([]);
      }
      setMovies(data.results || []);
      if(query && data.results.length > 0){
        await UpdateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.error(`error fetching movies ${error}`);
    } finally {
      setLoading(false);
    }
  };
  const LoadTrendingMovies = async()=>{
    try{
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    }catch(error){
      console.error(`error getting trending movies: ${error}`)
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(()=>{
    LoadTrendingMovies();}, []);
  return (
    <main className="overflow-x-hidden">
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="hero image" class="hero" />
          <h1>
            Click. <span className="text-gradient">Watch</span>. Feel.{" "}
            <span className="text-gradient">Repeat</span>
          </h1>
          <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
        </header>

        {/* {TrendingMovies.length>0 &&(
          <section className="trending">
            <h2>Trending Movies</h2>

            <ul>
              {TrendingMovies.map((movie, index) =>(
                <li key={movie.$id}>
                  <p>{index+1}</p>
                </li>
              ))}
            </ul>

          </section>
        )} */}
        <section className="all-movies">
          <h1 className="text-3xl text-white">All movies</h1>
          {Loading ? (
            <p className="text-white">Loading.. please be patient</p>
          ) : errorMessage ? (
            <p className="text-red-600 text-2xl">{errorMessage}</p>
          ) : (
            <ul>
              {Movies.map((movie) => (
                // <p className="text-white" key = {movie.id}>{movie.title}</p>
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default App;
