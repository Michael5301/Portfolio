import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "../img/TechIcons/menu-add.png";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <>
      <nav className="bg-black text-white opacity-95 sticky top-0 z-10">
        <div className="flex justify-between items-center px-5 bg-transparent h-20 font-thin ">
          <h2 className="text-4xl font">MG</h2>

          <div className="hidden lg:flex justify-between gap-5 text-2xl">
            <a href="#aboutme">Om Mig</a>
            <a href="#projects">Projekt</a>
            <a href="#form">Kontakt</a>
          </div>

          <img
            src={Menu}
            alt=""
            className="block lg:hidden tex-white w-6 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </nav>

      {isOpen && (
        <AnimatePresence>
          <motion.div
            className="lg:hidden flex flex-col gap-10 items-end p-5 text-xl bg-black opacity-95 text-white fixed h-screen w-screen z-10 px-10"
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? "0%" : "100%" }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsOpen(false)}
          >
            <a href="#aboutme">Om Mig</a>
            <a href="#projects">Projekt</a>
            <a href="#form">Kontakt</a>
            <a href="https://github.com/Michael5301">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/michael-gagi">
              <CiLinkedin />
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              <MdOutlineEmail />
            </a>
          </motion.div>
        </AnimatePresence>
      )}

    </>
  );
};

export default Nav;
