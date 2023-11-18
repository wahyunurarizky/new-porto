import { useState } from 'react'
import Button from './Button'
import { FaHamburger } from 'react-icons/fa'
import { useApp } from '../context/AppContext'

const Header = () => {
  const [show, setShow] = useState(false)

  const { skillsRef, aboutRef, experienceRef, projectRef, connectRef } =
    useApp()

  return (
    <div className="fixed w-full px-4 laptop:px-[100px] z-50 bg-white bg-opacity-90 py-2 laptop:py-4 max-w-screen-jumbotron">
      <div className="hidden w-full laptop:flex justify-end gap-[10px] items-center z-10 ">
        <Button
          theme="transparent"
          onClick={() => {
            setShow(false)
            aboutRef?.current?.scrollIntoView()
          }}
        >
          About
        </Button>
        <Button
          onClick={() => {
            setShow(false)
            skillsRef?.current?.scrollIntoView()
          }}
          theme="transparent"
        >
          Skills
        </Button>
        <Button
          onClick={() => {
            setShow(false)
            experienceRef?.current?.scrollIntoView()
          }}
          theme="transparent"
        >
          Experiences
        </Button>
        <Button
          onClick={() => {
            setShow(false)
            projectRef?.current?.scrollIntoView()
          }}
          theme="transparent"
        >
          Projects & Portfolio
        </Button>
        <Button
          onClick={() => {
            setShow(false)
            connectRef?.current?.scrollIntoView()
          }}
        >
          Connect with me!
        </Button>
      </div>
      <div className="flex items-center justify-end w-full laptop:hidden">
        <Button
          theme="transparent"
          iconOnly
          onClick={() => {
            setShow((p) => !p)
          }}
          className="z-20"
        >
          <FaHamburger size="30" />
        </Button>
        <div
          className={`absolute w-screen top-0 right-0 flex flex-col items-center h-screen gap-2 py-4 overflow-auto bg-white transition-all ease-in duration-300 ${
            show ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Button
            theme="transparent"
            onClick={() => {
              setShow(false)
              aboutRef?.current?.scrollIntoView()
            }}
          >
            About
          </Button>
          <Button
            onClick={() => {
              setShow(false)
              skillsRef?.current?.scrollIntoView()
            }}
            theme="transparent"
          >
            Skills
          </Button>
          <Button
            onClick={() => {
              setShow(false)
              experienceRef?.current?.scrollIntoView()
            }}
            theme="transparent"
          >
            Experiences
          </Button>
          <Button
            onClick={() => {
              setShow(false)
              projectRef?.current?.scrollIntoView()
            }}
            theme="transparent"
          >
            Projects & Portfolio
          </Button>
          <Button
            onClick={() => {
              setShow(false)
              connectRef?.current?.scrollIntoView()
            }}
          >
            Connect with me!
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
