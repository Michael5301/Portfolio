import profile from "../assets/images/ProfileIMG.png";

function Aboutme() {
	return (
		<div className="bg-white pb-6 lg:pb-12" id="aboutme" >
			{/* container */}

			<section className="grid gap-10 max-w-[1440px] mx-auto p-5 md:py-10 ">
				{/* heading */}
				<h2 className="text-4xl font-light flex justify-start pt-36 md:py-20">
					<span className="text-fuchsia-600 p-5">Om mig</span>
				</h2>
				{/* aboutmeContainer */}

				<div className="grid md:grid-cols-2 gap-20 justify-between md:h-160 mx-auto">
					<div className="bg-[url(/public/img/assets/ProfileIMG.png)]">
						<img
							src={profile}
							alt="profile image"
							width="450px"
							className="shadow-3xl grayscale brightness-75 rounded-sm mx-auto"
						></img>
					</div>

					<div className="flex flex-col justify-center text-xl gap-8 md:gap-10 ">
						<h2 className="text-3xl lg:text-4xl xl:text-5xl font-light">Michael Samson</h2>

						<p className="font-light tracking-wide ">
							Jag hjälper företag att öka sin försäljning med
							smarta webblösningar utan att behöva investera i
							dyra system.
						</p>

						<div className="flex gap-20 text-xl ">
							<div className="">
								<span className=" text-xl font-semibold"> 500 +</span>
								<p>Timmar kodat</p>
							</div>

							<div>
								<span className="font-semibold">10 +</span>
								<p>Projekt byggda</p>
							</div>
						</div>

						<div className="flex gap-20 text-xl ">
							<div className="">
								<span className="font-semibold"> Språk</span>
								<p>✓ Engelska: flytande</p>
								<p>✓ Svenska: medelnivå</p>
							</div>

							
						</div>


						<div>
						<a
							href="#form"
							id=""
						>
							<button className="bg-[url('/public/img/btn/btn.png')] py-3 px-4 text-[16px] text-white xl:text-lg shadow-2xl 
							hover:bg-[url('/public/img/btn/btn-hover1.png')] duration-300 ease-in-out font-semibold">
								TA KONTAKT →
							</button>
						</a>
						</div>

					</div>
				</div>
			</section>
		</div>
	);
}

export default Aboutme;
