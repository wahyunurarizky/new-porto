import React from 'react'
import Button from './Button'
import { FaHamburger } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="fixed w-full px-4 laptop:px-[100px] z-50 bg-white bg-opacity-90 py-2 laptop:py-4 max-w-screen-jumbotron">
      <div className="hidden w-full laptop:flex justify-end gap-[10px] items-center z-10 ">
        <Button theme="transparent">About</Button>
        <Button theme="transparent">Experiences</Button>
        <Button theme="transparent">Projects & Portfolio</Button>
        <Button>Connect with me!</Button>
      </div>
      <div className="flex items-center justify-end w-full laptop:hidden">
        <Button theme="transparent" iconOnly>
          <FaHamburger size="30" />
        </Button>
      </div>
    </div>
  )
}

export default Header
