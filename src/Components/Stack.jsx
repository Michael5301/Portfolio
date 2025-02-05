import reacticon from "/public/img/TechIcons/react.png";
import firebase from "/public/img/TechIcons/firebase.png";
import javascripticon from "/public/img/TechIcons/javascript.png";
import typescript from "/public/img/TechIcons/typescript.png";
import mongo from "/public/img/TechIcons/mongo.png";
import nextjs from "/public/img/TechIcons/nextjs.png";
import bootstrap from "/public/img/TechIcons/bootstrap.png";
import tailwindcss from "/public/img/TechIcons/tailwindcss.png";
import html from "/public/img/TechIcons/html.png";
import css from "/public/img/TechIcons/css.png";

const Stack = () => {
	return (
		<div className="bg-black opacity-90">
			<div className="max-w-[1440px] mx-auto px-5 gap-5 text-2xl py-10 md:py-20 text-white">
				<div>
					<h2 className="py-20 text-center text-4xl font-300">
						Verk && Erfarenhet
					</h2>
				</div>

				<div className="flex flex-wrap justify-center items-center gap-5">

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded bg-white opacity-80 text-slate-600 border-0 hover:scale-105 ease-in-out cursor-pointer duration-300">
						<img src={reacticon} alt="something" width="48px"></img>
						<p className="text-sm">react</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded  bg-white opacity-80 text-slate-600 border-0 hover:scale-105 ease-in-out cursor-pointer duration-300">
						<img src={firebase} alt="something" width="48px"></img>
						<p className="text-sm">firebase</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded  bg-white opacity-80 text-slate-600 border-0 hover:scale-105 ease-in-out cursor-pointer duration-300">
						<img src={javascripticon} alt="something" width="48px"></img>
						<p className="text-sm">javascript</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded  bg-white opacity-80 text-slate-600 border-0 hover:scale-105 ease-in-out cursor-pointer duration-300">
						<img src={typescript} alt="s" width="48px"></img>
						<p className="text-sm">typescript</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded  bg-white opacity-80 text-slate-600 border-0 hover:scale-105 ease-in-out cursor-pointer duration-300">
						<img src={mongo} alt="s" width="48px"></img>
						<p className="text-sm">mongo db</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded  bg-white opacity-80 text-slate-600 border-0 hover:scale-105 ease-in-out cursor-pointer duration-300">
						<img src={bootstrap} alt="s" width="48px"></img>
						<p className="text-sm">bootstrap</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded  bg-white opacity-80 text-slate-600 border-0 hover:scale-105 ease-in-out cursor-pointer duration-300">
						<img src={tailwindcss} alt="s" width="48px"></img>
						<p className="text-sm">tailwind</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded  bg-white opacity-80 text-slate-600 border-0 hover:scale-105 ease-in-out cursor-pointer duration-300">
						<img src={html} alt="s" width="48px"></img>
						<p className="text-sm">html</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded  bg-white opacity-80 text-slate-600 border-0 hover:scale-105 ease-in-out cursor-pointer duration-300">
						<img src={css} alt="something" width="48px"></img>
						<p className="text-sm">css</p>
					</div>

					<div className="w-32 p-2 shadow-2xl flex flex-col justify-center items-center rounded  bg-white opacity-80 text-slate-600 border-0 hover:scale-105 ease-in-out cursor-pointer duration-300">
						<img src={nextjs} alt="somethingthis is image" width="48px"></img>
						<p className="text-sm">NextJs</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stack;
