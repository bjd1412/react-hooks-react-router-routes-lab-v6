import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then(res => res.json())
    .then(res => setActors(res))
    .catch(error => console.error(error))
  },[])

 const AllActors = actors.map(actor => {
  const actorsMovies = actor.movies.map(movie => (
    <li key={movie}>{movie}</li>
  ))
  return(
    <article key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>
        {actorsMovies}
      </ul>
    </article>
  )
 })
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Actors Page</h1>
        {AllActors}
      </main>
    </>
  );
};

export default Actors;
