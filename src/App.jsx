import "./App.css";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { useDebounce } from "react-use";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState();
  const [topMovies, setTopMovies] = useState([]);

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    try {
      const endpoint = query
        ? `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const fetchTopMovies = async () => {
    try {
      const res = await fetch(`${BASE_URL}/movie/top_rated`, API_OPTIONS);
      const data = await res.json();
      setTopMovies(data.results);
      console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTopMovies();
  }, []);

  return (
    <main>
      <header className="mt-15 flex justify-center items-center flex-col">
        <img src="logo (1).png" alt="logo" />
        <img src="hero.png" alt="hero-image" />
        <h1 className="max-w-4x mx-auto leading-tight text-5xl tracking-[-1%] text-white sm:text-[64px] sm:leading-[76px] text-center ">
          Find <span className="text-[#AB8BFF]">Movies</span> You&apos;ll Love
          Without the Hassle
        </h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>

      {topMovies.length > 0 && (
        <section className="mt-20">
          <h2 className="text-white font-bold text-2xl text-left sm:text-3xl pb-5">
            Top Rated Movies
          </h2>
          <ul className="flex flex-row overflow-y-auto gap-5 -mt-10 w-full hide-scrollbar">
            {topMovies.map((movie, index) => (
              <li
                key={movie.id}
                className="min-w-[230px] flex flex-row items-center"
              >
                <p className="fancy-text mt-[22px] text-nowrap">{index + 1}</p>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : "/no-movie.png"
                  }
                  alt={movie.title}
                  className="w-[127px] h-[163px] rounded-lg object-cover -ml-3.5"
                />
              </li>
            ))}
          </ul>
        </section>
      )}
      <section className="space-y-9 mt-15">
        <h2 className="text-white font-bold text-2xl text-left sm:text-3xl pb-5">
          Popular Movies
        </h2>
        {isLoading ? (
          <Spinner />
        ) : (
          <ul className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};
export default App;
