import { useEffect } from 'react'
import { getPeliculas } from './helpers/getPeliculas'
import { useState } from 'react'
import { MostrarPeliculas } from './components/MostrarPeliculas'
import {Navbar} from './components/Navbar'


function App() {
  const [pelicula, setpeliculas] = useState()
  const [filterPersonaje, setfilterPersonaje] = useState("")
  useEffect(() => {
    getPeliculas().then(res => setpeliculas(res.results))
  }, [])

  const personajeFilter = () => {
    if (filterPersonaje !== null && filterPersonaje.length > 0) {
      return pelicula.filter(usu => usu.status.toLowerCase().includes(filterPersonaje.toLowerCase()))
    } else {
      return pelicula
    }

  }


  const abrirModelando = () => {
    setModelando(true)
  }

  return (
    <div>
      <section className="container">
        <Navbar />

      <MostrarPeliculas
        pelicula={personajeFilter()}        
        abrirModelando={abrirModelando}
      />

          
      </section>

    </div>
  )
}

export default App
