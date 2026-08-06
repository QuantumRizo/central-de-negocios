import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import PartnersCarousel from './components/PartnersCarousel'
import SuccessStories from './components/SuccessStories'
import CentralSimi from './components/CentralSimi'
import ValueProposition from './components/ValueProposition'
import Footer from './components/Footer'

function App() {
  const [currentView, setCurrentView] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#centralsimi') {
        setCurrentView('centralsimi')
        window.scrollTo({ top: 0, behavior: 'instant' })
      } else {
        setCurrentView('home')
      }
    }

    // Check initial hash
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <>
      <Navbar currentView={currentView} />
      
      <main>
        {currentView === 'centralsimi' ? (
          <CentralSimi />
        ) : (
          <>
            <Hero />
            <About />
            <PartnersCarousel />
            <Services />
            <SuccessStories />
            <ValueProposition />
          </>
        )}
      </main>

      <Footer />
    </>
  )
}

export default App
