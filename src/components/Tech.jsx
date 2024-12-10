import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaCss3 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const Tech = () => {
  return (
    <>
    <div className="border-b border-neutral-800 pb-20">

        <h1 className="my-20 text-center text-4xl">Technologies</h1>

        <div className="flex flex-wrap items-center justify-center gap-4">
            

            <FaReact className="text-7xl text-cyan-400 rounded-2xl border-4 border-neutral-800 p-1"/>
            <FaHtml5 className="text-7xl text-cyan-400 rounded-2xl border-4 border-neutral-800 p-1"/>
            <FaBootstrap className="text-7xl text-purple-950 rounded-2xl border-4 border-neutral-800 p-1"/>
            <RiTailwindCssFill className="text-7xl text-cyan-400 rounded-2xl border-4 border-neutral-800 p-1 "/>
            <TbBrandFramerMotion className="text-7xl text-white rounded-2xl border-4 border-neutral-800 p-1"/>
            <FaCss3 className="text-7xl text-cyan-400 rounded-2xl border-4 border-neutral-800 p-1"/>
            <RiNextjsFill className="text-7xl text-neutral rounded-2xl border-4 border-neutral-800 p-1"/>

            
        </div>

    </div>
    </>
  )
}

export default Tech