import { useApp } from '../context/AppContext'

const AboutMe = () => {
  const { aboutRef } = useApp()
  return (
    <div
      ref={aboutRef}
      className="z-20 w-full flex flex-col items-center gap-4 px-4 tablet:px-12 laptop:px-[100px] py-10 tablet:py-20 laptop:py-40 text-white bg-arzky-navy text-center max-w-screen-jumbotron"
      id="experiences"
    >
      <h2 className="text-[24px]/[26px] tablet:text-[36px] laptop:text-[48px] font-passion">
        Hello, I’m Wahyu.{' '}
        <span className="whitespace-nowrap">Nice to meet you!</span>
      </h2>
      <p className="text-sm tablet:text-base laptop:text-xl/8">
        I am software developer with 3+ years of experiences. Born into this
        world to help and make your dreams come true.
      </p>
    </div>
  )
}

export default AboutMe
