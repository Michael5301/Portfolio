import { AnimatePresence, motion } from "framer-motion";
import theball from "../img/assets/Purple-glas.png";
// import Neurons from '../img/assets/neurons.jpg'

function Header() {
	return (
		<header className="text-white lg:h-[calc(-80px+100vh)] flex justify-center items-center relative">
			<div className="absolute inset-0 bg-black opacity-80"></div>
			<div className="max-w-[1200px] 2xl:max-w-[1440px] py-5 m-auto lg:py-10 z-10">
				<div className="grid gap-16 lg:grid-cols-2 mx-auto">
					{/* header text */}
					<div className="flex flex-col justify-center px-5 md:px-10 pt-5 gap-10 overflow-hidden">
						<motion.h1
							className="text-4xl xl:text-6xl font-thin"
							initial={{ x: "-200%" }}
							animate={{ x: 0 }}
							transition={{
								delay: 0,
								duration: 1
							}}
						>
							Smarta lösningar <br />
							som driver resultat.
						</motion.h1>

						<motion.p
							className="text-2xl font-thin"
							initial={{ x: "-100%" }}
							animate={{ x: 0 }}
							transition={{
								delay: 0,
								duration: 1
							}}
						>
							Jag hjälper företag att öka sin försäljning med
							smarta webblösningar utan att behöva investera i
							dyra system.
						</motion.p>

						<motion.div
							className="flex gap-10"
							initial={{ x: "-200%" }}
							animate={{ x: 0 }}
							transition={{
								delay: 1,
								duration: 1
							}}
						>
							<a href="#form">
							<button className="bg-[url('/src/img/btn/btn.png')] py-3 px-6 text-[16px] text-white md:text-xl shadow-2xl" >
								TA KONTAKT
							</button>
							</a>

							<a href="#projects">
							<button className="bg-[url('/src/img/btn/btn.png')] py-3 px-6 text-[16px] text-white md:text-xl shadow-2xl" >
								SE PROJEKT
							</button>
							</a>
						</motion.div>

						<motion.div
							className="flex flex-col gap-2"
							initial={{ y: '+200%', opacity:0.5 }}
							animate={{ y: '0%' , opacity: 1 }}
							transition={{
								delay: 1,
								duration: 1
							}}
						>
							<p className="text-normal">
								{" "}
								<span className="pr-2">✓</span> 500+ timmar
								kodat
							</p>
							<p className="text-normal">
								{" "}
								<span className="pr-2">✓</span>Självlärd webbutvecklar{" "}
							</p>
						</motion.div>
					</div>

					<div className="flex flex-col justify-end items-center overflow-visible relative z-0">
						{/* <img src={Neurons} alt="" className="absolute top-0 h-[80vh] w-72 rounded-t-[40rem]"/> */}
						<AnimatePresence>
						<motion.img
							initial={{ y: "-300%" }}
							animate={{ y: 0 }}
							transition={{
								delay: 0,
								duration: 3,
								type: "spring"
							}}
							src={theball}
							className="mb-[-120px]"
						></motion.img>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
