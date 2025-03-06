import './App.css'
import {animals} from './data/animals'

const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "Inception",
  "Pulp Fiction",
  "The Dark Knight",
  "Forrest Gump",
  "The Matrix",
  "Fight Club",
  "Interstellar",
  "The Lord of the Rings"
];

const HTMLmovies = movies.map((movie, index) => { 
  return (
  <li key={movie}>{movie} - {index+1}</li>
)})

const HTMLanimals = animals.map((animal, index) => { 
  return (
  <div key={index}>
    <h1>{animal.name}</h1>
    <img src={animal.photo} alt={animal.name}/>
  </div>
)})


function App() {
  return (
    <>
      <ul>
        {HTMLmovies}
      </ul>
     
        {HTMLanimals}
      
    </>
  )
}

export default App
