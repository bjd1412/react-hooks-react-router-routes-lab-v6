import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [director, setDirector] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(res => res.json())
    .then(res => setDirector(res))
    .catch(error => console.error(error))
  }, [])

  const AllDirectors = director.map(director => {
    const allMovies = director.movies.map(movie => (
      <li key={movie}>{movie}</li>
    ))
    return(
      <article key={director.id}> 
      <h2>{director.name}</h2>
      <ul>
        {allMovies}
      </ul>
      
      </article>
    )
  })
  return (
    <>
      <header>
        <NavBar/>
        <h1>Directors Page</h1>
      </header>
      <main>
        {AllDirectors}
      </main>
    </>
  );
};

export default Directors;
