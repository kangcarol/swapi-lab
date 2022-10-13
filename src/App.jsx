import { Route, Routes } from 'react-router-dom'
import './App.css'
import Starships from './pages/Starships/Starships'
import StarshipPage from './pages/StarshipPage/StarshipPage'
import NavBar from './components/Nav/Nav'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Starships />} />
        <Route path='/starship' element={<StarshipPage />} />
      </Routes>
    </>
  )
}

export default App
