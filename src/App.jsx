import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import PostDetails from './pages/PostDetails'


// instalar dependencia router-dom 
// npm i react-router-dom
// SPA una pagina y muestra segun la ruta
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:id' element={<PostDetails />} />
      </Routes>
    </>
  )
}

export default App
