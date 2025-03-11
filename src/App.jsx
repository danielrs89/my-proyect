import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import NavComponent from './components/NavComponent'


// instalar dependencia router-dom 
// npm i react-router-dom
// SPA una pagina y muestra segun la ruta
function App() {
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
    </>
  )
}

export default App
