import { useRef } from 'react'
import Header from './components/Header'
import AboutMe from './sections/AboutMe'
import Introduction from './sections/Introduction'
import Skills from './sections/Skills'
import { AppContext } from './context/AppContext'
import Button from './components/Button'
import { BsArrowUpCircle } from 'react-icons/bs'

function App() {
  const introRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  return (
    <AppContext.Provider value={{ introRef, aboutRef, skillsRef }}>
      <Header />
      <Introduction />
      <AboutMe />
      <Skills />
      <Button
        className="fixed z-30 bottom-4 right-4"
        theme="transparent"
        iconOnly
        onClick={() => introRef.current?.scrollIntoView()}
      >
        <BsArrowUpCircle size={30} />
      </Button>
    </AppContext.Provider>
  )
}

export default App
