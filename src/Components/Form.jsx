

function Form() {
	return (
		<div className="bg-slate-800 opacity-95 py-10">

		<form
			className="px-5 mx-auto  py-10 md:py-20"
			action="https://api.web3forms.com/submit"
			method="POST"
			id="form"
		>
			<div className="max-w-[500px] h-[600px] flex flex-col justify-between mx-auto items-center py-10 border-none text-xl shadow-2xl shadow-slate-500">
				<h2 className="text-2xl text-white">Kontaktformulär</h2>
				<input type="hidden" name="access_key" value="aa575c74-e64f-4afa-8379-e42fc5021736"></input>
				<input
					type="email"
					name="email"
					className="bg-slate-200 w-5/6 p-2 rounded-3xl shadow-inner outline-0 "
					placeholder="e-post"
					required
				></input>

				<input
					type="text"
					name="name"
					className="bg-slate-200 w-5/6 p-2 rounded-3xl shadow-inner outline-0"
					placeholder="Namn"
					required
				></input>

				<input
					type="number"
					className="bg-slate-200 w-5/6 p-2 rounded-3xl shadow-inner outline-0"
					name="phone-number"
					placeholder="Telefonnummer"
					required
				></input>

				
				
				<textarea
					name="Message"
					className="bg-slate-200 w-5/6 p-2 rounded shadow-inner outline-none resize-none text-slate-600 "
					rows={4}
					placeholder="Meddelande"
					required
				/>
				<button
					type="submit"
					className=" bg-[url('/public/img/btn/btn.png')] py-3 px-12 text-[16px] text-white md:text-xl shadow-2xl 
					hover:scale-105 duration-300 font-semibold"
				>
					Skicka →
				</button>
			</div>
		</form>
		</div>
	);
}

export default Form;
