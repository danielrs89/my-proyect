import './App.css'

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

function App() {
  return (
    <>
      <ul>
        {HTMLmovies}
      </ul>
    </>
  )
}

export default App
