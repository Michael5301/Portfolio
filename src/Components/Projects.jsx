import bandigo from "/public/img/projectImages/Bandigodesktop.png";
import plumbing from "/public//img/projectImages/plumberdesktop.png";
import agency from "/public/img/projectImages/WebAgencyDesktop.png";
import bandigoMobile from "/public/img/projectImages/Bandigomobile.png";
import plumbingMobile from "/public/img/projectImages/plumbermobile.png";
import agencymobile from "/public/img/projectImages/WebAgencyMonile.png";

function Projects() {
	/* ends here */

	return (
		/* project container */
		<div
			className="max-w-[1440px] px-5 mx-auto grid gap-10 py-10 md:py-20 mb-10"
			id="projects"
		>
			<h1 className="text-center text-3xl py-10 text-white">Projekt</h1>

			{/* project1 */}
			<div className="sticky top-20 ">
					<img
						src={bandigo}
						alt=""
						className="hidden md:block m-auto rounded-t-[16rem] shadow-2xl"
						id="box1"
					/>

					<img
						src={bandigoMobile}
						alt=""
						className="md:hidden m-auto rounded-t-[16rem]  shadow-2xl"
						id="box1"
					/>
				
			</div>
			{/* project 2*/}
			<div className="sticky top-40 lg:top-40">
				<img
					src={plumbing}
					alt=""
					className="hidden md:block m-auto rounded-t-[20rem]  shadow-2xl"
					id="box2"
				/>

				<img
					src={plumbingMobile}
					alt=""
					className=" md:hidden m-auto rounded-t-[16rem] shadow-2xl"
					id="box1"
				/>
			</div>

			<div className=" sticky top-60" id="box3">
				{/* <img src={AppSink}></img> */}
				<img
					src={agency}
					alt=""
					className="hidden md:block m-auto rounded-t-[20rem] shadow-2xl"
					id="box2"
				/>
				<img
					src={agencymobile}
					alt=""
					className=" md:hidden m-auto rounded-t-[16rem] sticky top-0 shadow-2xl"
					id="box1"
				/>
			</div>
		</div>
	);
}

export default Projects;
