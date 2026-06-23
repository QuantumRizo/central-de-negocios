import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Clients from './components/Clients'
import SuccessStories from './components/SuccessStories'
import ValueProposition from './components/ValueProposition'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <SuccessStories />
        <ValueProposition />
      </main>
      <Footer />
    </>
  )
}

export default App
