import { motion } from "framer-motion";
import theball from "../img/assets/Purple-glas.png";

function Header() {
	return (
		<header className="text-white h-[max(100vh, 1440px)]">
			

			<div className="max-w-[1200px] px-5 mx-auto py-5 md:py-10">
				<div className="grid gap-16 lg:grid-cols-2 mx-auto md:h-[max(100vh, 1440px)]">
					{/* header text */}
					<div className="flex flex-col justify-center px-5 md:px-10 gap-10 overflow-hidden">
						<motion.h1
							className="text-3xl md:text-6xl font-extralight"
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
							className="text-xl"
							initial={{ x: "-200%" }}
							animate={{ x: 0 }}
							transition={{
								delay: 0,
								duration: 2
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
							className="flex flex-col gap-2 font-600"
							initial={{ x: "-100%" }}
							animate={{ x: 0 }}
							transition={{
								delay: 2,
								duration: 2
							}}
						>
							<p className="text-2xl">
								{" "}
								<span className="px-2">✓</span> 500+ timmar
								kodat
							</p>
							<p className="text-2xl">
								{" "}
								<span className="px-2">✓</span>S
								webbutvecklar{" "}
							</p>
						</motion.div>
					</div>

					<div className=" flex flex-col justify-end">
						<motion.img
							initial={{ y: "-200%" }}
							animate={{ y: 0 }}
							transition={{
								delay: 0,
								duration: 4,
								type: "spring"
							}}
							src={theball}
							className="mb-[-120px]"
						></motion.img>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;