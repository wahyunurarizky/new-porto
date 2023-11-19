import { FaFire, FaGithub, FaLink } from 'react-icons/fa'
import { useApp } from '../context/AppContext'
import { IPorto, porto } from '../assets/data/porto'
import { useState } from 'react'
import Modal from 'react-modal'

const ProjectBox = ({ d }: { d: IPorto }) => {
  const [show, setShow] = useState(false)
  const closeModal = () => {
    setShow(false)
  }

  return (
    <div className="relative rounded-md shadow-v1 overflow-hidden group">
      <img src={d.image} className="object-contain object-center" />
      <div className="flex opacity-0 w-full h-full absolute left-0 top-0 bg-arzky-primary p-4 flex-col items-center justify-center gap-2 laptop:gap-4 group-hover:opacity-[98%] transition-all duration-300 ease-out">
        <h2 className="font-passion text-base laptop:text-xl text-justify text-arzky-navy">
          {d.name}
        </h2>
        <h2 className="font-passion text-xs laptop:text-base text-justify text-arzky-navy">
          {d.desc}
        </h2>
        <div className="w-full flex justify-center gap-4">
          <a
            target="_blank"
            href={d.github}
            className="rounded-full p-1 bg-white hover:bg-arzky-primary2 hover:text-white text-xl text-arzky-navy"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            href={d.url}
            className="rounded-full p-1 bg-white hover:bg-arzky-primary2 hover:text-white text-xl text-arzky-navy"
          >
            <FaLink />
          </a>
          <button
            onClick={() => {
              setShow(true)
            }}
            className="cursor-pointer rounded-full p-1 bg-white hover:bg-arzky-primary2 hover:text-white text-xl text-arzky-navy"
          >
            <FaFire />
          </button>
        </div>
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
          },
          overlay: {
            zIndex: 20
          }
        }}
        isOpen={show}
        contentLabel="Example Modal"
      >
        <h2 className="font-bold text-lg text-center text-arzky-navy mb-6">
          Build with:
        </h2>
        <div className="w-full grid grid-cols-2 laptop:grid-cols-4 gap-2 font-semibold text-arzky-navy">
          {d.buildWith.map((build, i) => (
            <div key={i}>{build}</div>
          ))}
        </div>
      </Modal>
    </div>
  )
}

const Project = () => {
  const { projectRef } = useApp()
  return (
    <div
      ref={projectRef}
      className="w-full flex flex-col items-center gap-12 px-4 scroll-m-12 tablet:px-12 laptop:px-[100px] py-10 tablet:py-20 laptop:py-40 text-white bg-arzky-bluegrey text-center max-w-screen-jumbotron"
    >
      <h2 className="text-[24px]/[26px] tablet:text-[36px] laptop:text-[48px] font-passion">
        Project and Portfolio
      </h2>

      <div className="grid w-full justify-center grid-cols-[repeat(auto-fit,150px)] laptop:grid-cols-[repeat(auto-fit,250px)] gap-4 laptop:gap-12">
        {porto.map((d, i) => (
          <ProjectBox d={d} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Project
