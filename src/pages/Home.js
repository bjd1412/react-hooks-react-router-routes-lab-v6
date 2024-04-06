import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [allMovie, setAllMovie] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(res => res.json())
    .then(res => setAllMovie(res))
    .then(error => console.error(error))
  }, [])
  
  const AllMovies = allMovie.map(movie => (
    <MovieCard key={movie.id} id={movie.id} title={movie.title}/>
  ))
  return (
    <>
      <header>
        <h1>Home Page</h1>
        <NavBar/>
      </header>
      <main>
        {AllMovies}
      </main>
    </>
  );
};

export default Home;
