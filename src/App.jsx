import Header from "./Components/Header";
import Aboutme from "./Components/Aboutme";
import Stacks from "./Components/Stack.jsx";
import Projects from "./Components/Projects.jsx";
import Forms from "./Components/Form.jsx";
import Footer from "./Components/Footer.jsx";
import Nav from "./Components/Nav.jsx";

function App() {
	return (
		<div>
			<Nav/>
			<Header />
			<Aboutme />
			<Stacks />
			<Projects />
			<Forms />
			<Footer />
		</div>
	);
}

export default App;
