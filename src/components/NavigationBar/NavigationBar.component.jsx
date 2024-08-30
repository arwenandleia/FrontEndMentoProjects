import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";

const navLinksCls =
	"px-3 sm:py-2 text-accentColour border-2 border-primaryBackground hover:bg-primaryText hover:text-primaryBackground rounded-xl w-full sm:w-fit text-center ";

const NavLinksMenu = () => (
	<>
		<Link className={navLinksCls} to="about">
			About
		</Link>
		<Link className={navLinksCls} to="products">
			Products
		</Link>
		<Link className={navLinksCls} to="contact">
			Contact
		</Link>
	</>
);

const NavigationBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenuOpen = () => setIsMenuOpen(!isMenuOpen);

	return (
		<nav className="px-2 ">
			<div className="flex flex-row justify-between items-stretch">
				<div className="h-20 flex items-center">
					<Link to="">
						<div className="text-accentColour">
							<div className="flex items-center text-3xl">
								<FcLinux /> Logo here
							</div>
						</div>
					</Link>
				</div>

				<div className="hidden  sm:flex items-center">
					<div className="text-lg">{<NavLinksMenu />}</div>
				</div>

				<div className="flex items-center cursor-pointer text-3xl  sm:hidden">
					<FaBars
						onClick={toggleMenuOpen}
						className="p-1 border-2 border-accentColour rounded-lg"
					/>
				</div>
			</div>

			{isMenuOpen && (
				<div className=" flex flex-col items-center sm:hidden">
					{<NavLinksMenu />}
				</div>
			)}
		</nav>
	);
};

export default NavigationBar;
