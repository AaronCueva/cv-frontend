import { useState } from 'react'
import CuevaCV from './components/CuevaCV'
import HuertaCV from './components/HuertaCV'
import Header from './components/Header'
import Footer from './components/Footer'

import type { Profile } from './types/Profile'

import './App.css'

function App() {

  const [isCueva, setIsCueva] = useState(true)

  const cueva: Profile = {
    nombre: "Aaron Cueva Paredes",
    numero: "913039208",
    correo: "aaroncueva.2103@gmail.com"
  }

  const huerta: Profile = {
    nombre: "Jesus Manuel Huerta Florentino",
    numero: "+51 977178193",
    correo: "jesushuertajob@gmail.com"
  }

  const profile = isCueva ? cueva : huerta

  return (
    <>
      <div className={isCueva ? "theme-cueva" : "theme-huerta"}>

        <Header
          profile={profile}
          cambiarPerfil={() => setIsCueva(!isCueva)}
        ></Header>

        {
          isCueva
            ? <CuevaCV /> : <HuertaCV />
        }

        <Footer
          profile={profile}
        ></Footer>

      </div>
    </>
  )
}

export default App
