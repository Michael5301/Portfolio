import reacticon from "/src/img/TechIcons/react.png";
import firebase from "/src/img/TechIcons/firebase.png";
import javascripticon from "/src/img/TechIcons/javascript.png";
import typescript from "/src/img/TechIcons/typescript.png";
import mongo from "/src/img/TechIcons/mongo.png";
import nextjs from "/src/img/TechIcons/nextjs.png";
import bootstrap from "/src/img/TechIcons/bootstrap.png";
import tailwindcss from "/src/img/TechIcons/tailwindcss.png";
import html from "/src/img/TechIcons/html.png";
import css from "/src/img/TechIcons/css.png";

const Stack = () => {
	return (
		<div className="bg-slate-800 opacity-80">
			<div className="max-w-[1200px] mx-auto px-5 gap-5 text-2xl py-10 md:py-20 text-white">
				<div>
					<h2 className="py-20 text-center text-4xl font-300">
						Verk && Erfarenhet
					</h2>
				</div>

				<div className="flex flex-wrap justify-center items-center gap-5">

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded-md bg-white opacity-80 text-slate-800 border-0">
						<img src={reacticon} alt="" width="48px"></img>
						<p className="text-xl">react</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded-md  bg-white opacity-80 text-slate-800 border-0">
						<img src={firebase} alt="" width="48px"></img>
						<p className="text-xl">firebase</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded-md  bg-white opacity-80 text-slate-800 border-0">
						<img src={javascripticon} alt="" width="48px"></img>
						<p className="text-xl">javascript</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded-md  bg-white opacity-80 text-slate-800 border-0">
						<img src={typescript} alt="" width="48px"></img>
						<p className="text-xl">typescript</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded-md  bg-white opacity-80 text-slate-800 border-0">
						<img src={mongo} alt="" width="48px"></img>
						<p className="text-xl">mongo db</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded-md  bg-white opacity-80 text-slate-800 border-0">
						<img src={bootstrap} alt="" width="48px"></img>
						<p className="text-xl">bootstrap</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded-md  bg-white opacity-80 text-slate-800 border-0">
						<img src={tailwindcss} alt="" width="48px"></img>
						<p className="text-xl">tailwind</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded-md  bg-white opacity-80 text-slate-800 border-0">
						<img src={html} alt="" width="48px"></img>
						<p className="text-xl">html</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded-md  bg-white opacity-80 text-slate-800 border-0">
						<img src={css} alt="" width="48px"></img>
						<p className="text-xl">css</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded-md  bg-white opacity-80 text-slate-800 border-0">
						<img src={nextjs} alt="" width="48px"></img>
						<p className="text-xl">NextJs</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stack;
