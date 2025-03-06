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

const HTMLmovies = movies.map(movie => { return (<li key={movie}>{movie}</li>) })

function App() {
  return (
    <>
      <ol>
        {HTMLmovies}
      </ol>
    </>
  )
}

export default App
