import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar.component";
import Footer from "../components/Footer/Footer.component";
import { Outlet } from "react-router-dom";

const MainNavigation = () => {
	return (
		<div className="h-screen flex flex-col justify-between max-w-7xl mx-auto">
			<div className="block">
				<NavigationBar />
			</div>
			<div className="block  h-full overflow-auto ">
				<Outlet />
			</div>

			<div className="block">
				<Footer />
			</div>
		</div>
	);
};

export default MainNavigation;
