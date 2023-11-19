import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import { IExp, experiences } from '../assets/data/experiences'
import { ImFire } from 'react-icons/im'
import Modal from 'react-modal'

const ExperienceBox = ({ d, index }: { d: IExp; index: number }) => {
  const [show, setShow] = useState(false)

  const closeModal = () => {
    setShow(false)
  }

  return (
    <div
      className={`flex w-full laptop:w-[60%] gap-4 ${
        index % 2 == 0 && index % 4 == 0
          ? 'self-start'
          : index % 2 == 1
          ? 'self-center'
          : 'self-end'
      }`}
    >
      <span className="font-passion text-[48px] hidden laptop:block">
        {index + 1})
      </span>
      <div className="flex-1 flex w-full items-start flex-col bg-white shadow-v1 rounded-md p-6">
        <div className="font-passion flex w-full justify-between">
          <span className="text-lg">{d.title}</span>
          <span className="text-lg">{d.date}</span>
        </div>
        <span className="font-passion text-lg">{d.company}</span>
        <p
          className="text-justify mt-2 [&>a]:italic [&>a]:font-semibold"
          dangerouslySetInnerHTML={{ __html: d.description }}
        ></p>
        <ImFire
          onClick={() => {
            setShow(true)
          }}
          className="self-end hover:scale-105 cursor-pointer hover:text-orange-600"
          size={20}
        />
      </div>
      <Modal
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
        isOpen={show}
        contentLabel="Example Modal"
      >
        <h2 className="font-bold text-lg text-center text-arzky-navy mb-6">
          What I learn and use in {d.company}
        </h2>
        <div className="w-full grid grid-cols-2 laptop:grid-cols-4 gap-2 font-semibold text-arzky-navy">
          {d.learns.map((learn, i) => (
            <div key={i}>{learn}</div>
          ))}
        </div>
      </Modal>
    </div>
  )
}

const Experience = () => {
  const { experienceRef } = useApp()

  return (
    <div
      ref={experienceRef}
      className="flex flex-col items-stretch px-4 laptop:px-20 w-full gap-2 py-10 text-center text-arzky-navy scroll-m-12 tablet:py-20 laptop:py-40 bg-white max-w-screen-jumbotron"
    >
      <h2 className="text-[24px]/[26px] tablet:text-[36px] laptop:text-[48px] font-passion px-4 tablet:px-12 laptop:px-[100px] mb-6 laptop:mb-16">
        Here are my work experiences
      </h2>
      <div className="w-full flex flex-col gap-4">
        {experiences.map((d, i) => (
          <ExperienceBox d={d} key={i} index={i} />
        ))}
      </div>
    </div>
  )
}

export default Experience
