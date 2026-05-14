import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import CuevaCV from './components/CuevaCV'
import Header from './components/Header'

import type { Profile } from './types/Profile'

import './App.css'

function App() {

  const cueva: Profile = {
    nombre: "Aaron Cueva Paredes",
    numero: "913039208",
    correo: "aaroncueva.2103@gmail.com"
  }

  const huerta: Profile = {
    nombre: "Jesus Manuel Huerta Florentino",
    numero: "....",
    correo: "jesusista@gmail.com"
  }

  const [isCueva, setIsCueva] = useState(true)
  const profile = isCueva ? cueva : huerta

  return (
    <>
      <div className={isCueva ? "theme-cueva" : "theme-huerta"}>

        <Header
          profile={profile}
          cambiarPerfil={() => setIsCueva(!isCueva)}
        ></Header>
      </div>
    </>





  )
}

export default App
