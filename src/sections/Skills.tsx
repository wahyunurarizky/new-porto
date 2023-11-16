import React, { useRef } from 'react'
import skills, { ISkill } from '../assets/data/skills'
import { useDraggable } from 'react-use-draggable-scroll'

const Skills = () => {
  return (
    <div
      className="z-20 flex flex-col items-center w-full gap-2 py-10 text-center text-white tablet:py-20 laptop:py-40 bg-arzky-bluegrey max-w-screen-jumbotron"
      id="experiences"
    >
      <h2 className="text-[24px]/[26px] tablet:text-[36px] laptop:text-[48px] font-passion px-4 tablet:px-12 laptop:px-[100px] mb-4 laptop:mb-8">
        Proudly present my abilities
      </h2>
      {skills.map((d, i) => (
        <SkillBox key={i} d={d} />
      ))}
    </div>
  )
}

const SkillBox = ({ d }: { d: ISkill }) => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  const { events } = useDraggable(ref)

  return (
    <div className="flex flex-col items-center w-full gap-2">
      <h3>{d.title}</h3>
      <div
        className="auto-cols-[minmax(95px,1fr)] laptop:auto-cols-[minmax(130px,1fr)] grid grid-cols-[repeat(auto-fit,minmax(95px,1fr))] laptop:grid-cols-[repeat(auto-fit,minmax(130px,1fr))] overflow-x-auto grid-flow-col max-w-full px-4 py-2 overflow-auto flex-nowrap scrollbar-hide justify-items-center"
        {...events}
        ref={ref}
      >
        {d.skills.map((skill, j) => (
          <div
            key={j}
            className="relative flex items-center justify-center p-5 overflow-hidden bg-white cursor-pointer shadow-v1 aspect-square rounded-xl group"
          >
            <img
              src={skill.image}
              className="w-[40px] laptop:w-[66px] m-auto"
            />
            <div className="absolute flex flex-col justify-center w-full h-full p-4 overflow-hidden transition-all duration-300 ease-in opacity-0 bg-arzky-primary group-hover:opacity-100">
              <span className="text-xs font-bold break-words laptop:text-base">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
