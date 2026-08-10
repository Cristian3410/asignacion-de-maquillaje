import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar.jsx'
import MainContent from './components/MainContent.jsx'

function App() {

  return (
   <BrowserRouter>
      {/* El Navbar va fuera de Routes porque quieres que aparezca en todas las páginas */}
      <NavBar />
      
      {/* Aquí está la clave: envuelve tus rutas en la etiqueta Routes */}
      <Routes>
        <Route path='/' element={<MainContent />} />
        {/* Aquí podrás agregar más rutas después: 
            <Route path='/tienda' element={<Tienda />} /> 
        */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
