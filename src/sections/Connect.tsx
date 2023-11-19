import { RiMailSendLine } from 'react-icons/ri'
import { useApp } from '../context/AppContext'
import { FiGithub } from 'react-icons/fi'
import { SlSocialLinkedin } from 'react-icons/sl'
import { LuInstagram } from 'react-icons/lu'
import { GrDocumentUser } from 'react-icons/gr'

const Connect = () => {
  const { connectRef } = useApp()
  return (
    <div
      ref={connectRef}
      className="z-10 w-full flex flex-col items-center gap-4 laptop:gap-8 px-4 scroll-m-12 tablet:px-12 laptop:px-[100px] py-10 tablet:py-16 laptop:py-32 text-white bg-arzky-navy text-center max-w-screen-jumbotron"
    >
      <h2 className="text-[24px]/[26px] tablet:text-[36px] laptop:text-[48px] font-passion">
        Let's connect now !
      </h2>
      <div className="flex w-full justify-evenly">
        <a
          target="_blank"
          href="mailto:wahyunurarizky18@gmail.com"
          className="w-[40px] laptop:w-[80px] aspect-square text-arzky-navy  bg-white rounded-full justify-center flex items-center cursor-pointer hover:bg-arzky-primary hover:text-white"
        >
          <RiMailSendLine className="text-base laptop:text-3xl" />
        </a>
        <a
          target="_blank"
          href="https://github.com/wahyunurarizky"
          className="w-[40px] laptop:w-[80px] aspect-square text-arzky-navy  bg-white rounded-full justify-center flex items-center cursor-pointer hover:bg-arzky-primary hover:text-white"
        >
          <FiGithub className="text-base laptop:text-3xl" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/wahyu-nur-arizky-a47275168"
          className="w-[40px] laptop:w-[80px] aspect-square text-arzky-navy  bg-white rounded-full justify-center flex items-center cursor-pointer hover:bg-arzky-primary hover:text-white"
        >
          <SlSocialLinkedin className="text-base laptop:text-3xl" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/wahyunurarizky"
          className="w-[40px] laptop:w-[80px] aspect-square text-arzky-navy  bg-white rounded-full justify-center flex items-center cursor-pointer hover:bg-arzky-primary hover:text-white"
        >
          <LuInstagram className="text-base laptop:text-3xl" />
        </a>
        <a
          download
          href="/wahyu-cv.pdf"
          className="w-[40px] laptop:w-[80px] aspect-square text-arzky-navy  bg-white rounded-full justify-center flex items-center cursor-pointer hover:bg-arzky-primary hover:text-white"
        >
          <GrDocumentUser className="text-base laptop:text-3xl" />
        </a>
      </div>
    </div>
  )
}

export default Connect
