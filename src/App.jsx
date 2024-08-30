import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.page";

import MainNavigation from "./routes/MainNavigation.route";
import About from "./pages/About.page";
import Contact from "./pages/Contact.page";
import Products from "./routes/Products/Products.route";

function App() {
	return (
		<Routes>
			<Route path="/FrontEndMentoProjects/*" element={<MainNavigation />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="products/*" element={<Products />} />
			</Route>
		</Routes>
	);
}

export default App;
