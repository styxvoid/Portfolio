import { useState, useEffect } from 'react'
import Welcome from './pages/Welcome'

function App() {
  const [active, setActive] = useState('about')
  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(false)

  useEffect(() => {
    const savedLangChoice = localStorage.getItem('portfolio_lang_selected')
    if (savedLangChoice) {
      setHasSelectedLanguage(true)
    }
  }, [])

  if (!hasSelectedLanguage) {
    return <Welcome onLanguageSelect={() => setHasSelectedLanguage(true)} />
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-green-400 font-mono p-8">N:// Portfolio</h1>
      <p className="text-white p-8">Tailwind funcionando ✓</p>
      
      {/* O seu estado 'active' e os seus componentes (About, Work, etc.) vão entrar aqui embaixo depois */}
    </div>
  )
}

export default App