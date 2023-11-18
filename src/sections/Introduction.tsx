import { useApp } from '../context/AppContext'

const Introduction = () => {
  const { introRef } = useApp()

  return (
    <div
      ref={introRef}
      className="relative flex items-center justify-center overflow-hidden scroll-m-12 pt-[102px] max-w-screen-jumbotron w-full"
    >
      <h1 className="font-passion font-bold text-arzky-navy text-[50px] tracking-[10px] tablet:text-[100px] tablet:tracking-[20px] laptop:tracking-[52.5px] laptop:text-[150px] text-center ">
        SOFTWARE DEVELOPER
      </h1>
      <img
        src="/arzky.png"
        className="absolute w-[200px] tablet:w-[320px] laptop:w-auto bottom-0 overflow-hidden"
      />
    </div>
  )
}

export default Introduction
