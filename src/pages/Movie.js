import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams()
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(res => res.json())
    .then(res => setMovie(res))
    .catch(error => console.error(error))
  },[movieId])

  if(!movie.title){
    return <h1>Loading...</h1>
  }
  const AllGenres = movie.genres.map(genre => {
    return(
      <span key={genre}>{genre}</span>
    )
  })

  return (
    <>
      <header>
        <NavBar/>
        <h1>{movie.title}</h1>
      </header>
      <main>
      <p>Time:{movie.time}</p>
       {AllGenres}
      </main>
    </>
  );
};

export default Movie;
