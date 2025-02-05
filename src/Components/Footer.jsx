import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
	return (
		<div className="bg-gradient-to-r from-fuchsia-700 via-purple-700 to-pink-500 py-5 text-white">

			<div className="max-w-[1440px] mx-auto">

			<footer className="px-5 lg:px-10 xl:px-20 grid md:grid-cols-2 gap-10 md:gap-20 mx-auto">
				<div className="text-center">
					<a href="#form">
						<h2 className="text-left py-5 text-2xl underline underline-offset-2">
							Kontakta mig!
						</h2>
					</a>

					<p className="text-start">
						Vill du samarbeta eller veta mer om mina projekt? Kontakta mig gärna
						på LinkedIn
						<br></br>– jag ser fram emot att höra från dig!
					</p>
				</div>

				<div className=" text-center flex justify-start lg:justify-end items-end gap-10 text-3xl">
					<a href="https://github.com/Michael5301">
						<FaGithub className="hover:scale-105 duration-300"/>
					</a>
					<a href="https://www.linkedin.com/in/michael-gagi">
						<CiLinkedin className="hover:scale-105 duration-300"/>
					</a>

					<a href="mailto:info@michaelsamson.dev">
						<MdOutlineEmail className="hover:scale-105 duration-300"/>
					</a>
				</div>
			</footer>

			<div className="text-center flex flex-col gap-5 pt-4">
				<a href="tel:+46739855874" className="text-center font-light text-2xl hover:underline tracking-wide" >
					<span className="">🤳🏾</span> Ringa Nu!
				</a>
				<p className="text-center">&copy;2025 Michael Samson</p>
			</div>

			</div>

		</div>
	);
};

export default Footer;
