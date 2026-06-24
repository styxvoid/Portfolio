import { useState } from 'react'

function App() {
  const [active, setActive] = useState('about')

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-green-400 font-mono p-8">N:// Portfolio</h1>
      <p className="text-white p-8">Tailwind funcionando ✓</p>
    </div>
  )
}

export default App