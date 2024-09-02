import "./ThreeColumnPreview.style.css";

import sedanIcon from "../../../assets/FrontEndMentor/ThreeColumnPreview/icon-sedans.svg";
import suvIcon from "../../../assets/FrontEndMentor/ThreeColumnPreview/icon-suvs.svg";
import luxuryIcon from "../../../assets/FrontEndMentor/ThreeColumnPreview/icon-luxury.svg";

const cssH2 =
	"text-4xl big-shoulders-700 text-ThreeColumnPreview-lightgrey my-10";
const cssPara =
	"text-sm leading-relaxed lexend-deca-400 text-ThreeColumnPreview-whitepara opacity-75";
const cssButton =
	"text-base lexend-deca-400 hover:text-ThreeColumnPreview-lightgrey bg-ThreeColumnPreview-lightgrey hover:bg-transparent border border-ThreeColumnPreview-lightgrey rounded-full py-2 px-5 text-inherit mb-4 mt-4 sm:mt-16";
const cssColumnBlock =
	"w-full sm:w-1/3 p-6 sm:p-10 flex flex-col justify-between ";

const LearnMoreButton = () => (
	<button type="button" className={`${cssButton}`}>
		Learn More
	</button>
);

const ThreeColumnPreview = () => {
	return (
		<div className=" bg-ThreeColumnPreview-lightgrey">
			<div className="flex flex-col sm:flex-row sm:items-stretch p-6 sm:p-10 max-w-4xl mx-auto">
				<div
					className={`bg-ThreeColumnPreview-orange ${cssColumnBlock} rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl`}>
					<div className="">
						<img src={sedanIcon} alt="Sedan Icon" className="max-w-fit" />
						<h2 className={`${cssH2}`}>SEDANS</h2>
						<p className={`${cssPara}`}>
							Choose a sedan for its affordability and excellent fuel economy.
							Ideal for cruising in the city or on your next road trip.
						</p>
					</div>
					<div className="text-ThreeColumnPreview-orange ">
						<LearnMoreButton />
					</div>
				</div>
				<div className={`bg-ThreeColumnPreview-cyan ${cssColumnBlock}`}>
					<div className="">
						<img src={suvIcon} alt="SUV Icon" className="max-w-fit" />
						<h2 className={`${cssH2}`}>SUVs</h2>
						<p className={`${cssPara}`}>
							Take an SUV for its spacious interior, power, and versatility.
							Perfect for your next family vacation and off-road adventures.
						</p>
					</div>
					<div className="text-ThreeColumnPreview-cyan">
						<LearnMoreButton />
					</div>
				</div>
				<div
					className={`bg-ThreeColumnPreview-darkcyan ${cssColumnBlock} rounded-b-xl sm:rounded-bl-none sm:rounded-r-xl`}>
					<div className="">
						<img src={luxuryIcon} alt="Luxury Icon" className="max-w-fit" />
						<h2 className={`${cssH2}`}>Luxury</h2>
						<p className={`${cssPara}`}>
							Cruise in the best car brands without the bloated prices. Enjoy
							the enhanced comfort of a luxury rental and arrive in style.
						</p>
					</div>
					<div className="text-ThreeColumnPreview-darkcyan">
						<LearnMoreButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThreeColumnPreview;
