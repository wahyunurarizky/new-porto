import { RefObject, createContext, useContext } from 'react'

interface AppContext {
  introRef?: RefObject<HTMLDivElement>
  aboutRef?: RefObject<HTMLDivElement>
  skillsRef?: RefObject<HTMLDivElement>
  experienceRef?: RefObject<HTMLDivElement>
  projectRef?: RefObject<HTMLDivElement>
  connectRef?: RefObject<HTMLDivElement>
}

export const AppContext = createContext<AppContext>({})

export const useApp = () => useContext(AppContext)
