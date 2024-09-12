import { Routes, Route } from "react-router-dom";
import LimousineHomePage from "../../pages/Limousine/LimousineHomePage.page";

const Limousine = () => {
	return (
		<Routes>
			<Route path="" element={<LimousineHomePage />} />
		</Routes>
	);
};

export default Limousine;
