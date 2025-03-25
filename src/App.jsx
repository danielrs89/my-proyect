import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import { lazy, Suspense } from 'react' // carga diferida de componentes.

// Usando lazy loading para cargar los componentes solo cuando se necesiten.
const BlogPage = lazy(() => import('./pages/BlogPage'))
const PostDetails = lazy(() => import('./pages/PostDetails'))
const SettingsPage = lazy(() => import('./pages/SettingsPage'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))


// Para instalar la dependencia de react-router-dom, puedes usar:
// npm i react-router-dom
// Este es un ejemplo de SPA (Single Page Application) que muestra diferentes páginas según la ruta.

function App() {
  return (
    <>
      {/* Suspense permite mostrar una interfaz de carga mientras se carga el componente de manera diferida */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:id' element={<PostDetails />} />
          <Route path='/settings' element={<SettingsPage />} />

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
