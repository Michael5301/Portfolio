import React from 'react';
import logo from "../assets/kevinRushLogo.png";
import { CiLinkedin } from "react-icons/ci";
import { FaGit } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";


const Navbar = () => {
    return (
        <nav className='bg-mb-20 py-6 flex items-center justify-between'>

            <div className='flex flex-shrink-0 items-center'>
                <img src= {logo} alt="logo" className='mx-2 w-10'/>
            </div>

            <div className='flex m-6 items-center gap-4 text-2xl'>
            <CiLinkedin />
            <FaGit />
            <FaTwitter />
            <CiInstagram />
            </div>

        </nav>
    )
}

export default Navbar