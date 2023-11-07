import { useContext } from 'react'
import { ThemeContext } from './themes'
import Header from './components/header/header'
import About from './components/about/about'
import Projects from './components/projects/projects'
import ScrollToTop from './components/scrollTop/scrollTop.js'
import Contact from './components/email/email'
import Footer from './components/footer/footer'
import './app.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
