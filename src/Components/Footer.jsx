import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
	return (
		<div className="bg-gradient-to-r from-fuchsia-700 via-purple-700 to-pink-500 py-5 text-white">

			<footer className="px-5 grid md:grid-cols-2 gap-10 md:gap-20 mx-auto">
				<div className="text-center">

					<a href="#form">
					<h2 className="text-left py-5 text-2xl underline underline-offset-2">
						Kontakta mig!
					</h2>
					</a>

					<p className="text-start">
						Vill du samarbeta eller veta mer om mina projekt?
						Kontakta mig gärna på LinkedIn
						<br></br>– jag ser fram emot att höra från dig!
					</p>
				</div>

				<div className=" text-center flex justify-center items-center gap-10 text-3xl">
					<a href="https://github.com/Michael5301">
						<FaGithub/>
					</a>
					<a href="https://www.linkedin.com/in/michael-gagi">
						<CiLinkedin />
					</a>

					<a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
						<MdOutlineEmail />
					</a>
				</div>
			</footer>
			<div className="text-center p-2">
				<a href="tel:+46739855874" className="text-center p-5">
					+46 739 855 874
				</a>
				<p className="text-center p-2">&copy; 2025 Michael Samson</p>
			</div>
		</div>
	);
};

export default Footer;
