
import { HERO_CONTENT } from '../constants'
import ProfilePic from '../assets/kevinRushProfile.jpg'
import { motion } from "framer-motion"




const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-36 mx-auto'>

            <div className="flex flex-wrap">

                <div className="w-full lg:w-1/2">

                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{duration:0.5, delay: 1}}
                            className='pb-16 text-6xl font-thin tracking-thin lg:mt-16 lg:text-8xl'>Michael Gagi</motion.h1>
                    </div>

                    {/* span bg create a bg which can be seen when text becomes transparent */}
                    <motion.span 
                     initial={{ x: -100, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{duration:0.5, delay: 2}}
                    className='bg-gradient-to-r from-pink-300 to via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                        Full Stack Developer
                    </motion.span>

                    <p className='my-2 py-6 font-light tracking-tighter max-w-xl'>
                        {HERO_CONTENT}
                    </p>

                </div>

                <div className='w-full lg:w-1/2 lg:p-8'>

                    <div className="flex justify-center">
                        <img src={ProfilePic} alt="profile picture" className='rounded-lg' />
                    </div>

                </div>


            </div>

        </div>
    );
}

export default Hero