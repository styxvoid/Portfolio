import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(About)

  return (
    <>
    <Navbar active={active} onNavigate={setActive}/>
    <main>
      {active === 'about' && <About/>}
      </main>
    </>
  )
}

export default App
