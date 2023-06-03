import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import SocialIcons from './components/SocialIcons'
import Home from './components/Home'

function App() {

  return (
    <>
        <NavBar />
        <div>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <SocialIcons />
        </div>
    </>
  )
}

export default App
