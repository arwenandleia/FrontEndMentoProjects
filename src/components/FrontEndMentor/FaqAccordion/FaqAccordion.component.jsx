import backgroundPatternDesktop from "../../../assets/FrontEndMentor/FaqAccordion/background-pattern-desktop.svg";
import backgroundPatternMobile from "../../../assets/FrontEndMentor/FaqAccordion/background-pattern-mobile.svg";
import iconStar from "../../../assets/FrontEndMentor/FaqAccordion/icon-star.svg";

import IndividualFAQ from "./IndividualFAQ.component";

const accordionFaqList = [
	{
		question: "What is Frontend Mentor, and how will it help me?",
		answer:
			"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
	},
	{
		question: "Is Frontend Mentor free?",
		answer:
			"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
	},
	{
		question: "Can I use Frontend Mentor projects in my portfolio?",
		answer:
			"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
	},
	{
		question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
		answer:
			"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
	},
];

const FaqAccordion = () => {
	return (
		<div className="relative h-[40rem] flex justify-center items-center ">
			<div className="absolute top-0 left-0 -z-10 flex flex-col  justify-stretch  rounded-2xl">
				<img
					src={backgroundPatternDesktop}
					alt="bg desktop"
					className="hidden md:block rounded-t-2xl"
				/>
				<img
					src={backgroundPatternMobile}
					alt="bg mobile"
					className=" md:hidden rounded-t-2xl"
				/>
			</div>
			<div className="absolute top-0 left-0 right-0 -z-20 bg-FaqAccordion-lightPink h-full rounded-2xl"></div>
			<div className="px-3 py-6 sm:px-6 bg-FaqAccordion-white rounded-2xl w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-5 sm:mx-auto">
				<h2 className="flex  text-3xl sm:text-6xl text-FaqAccordion-darkPurple font-bold ">
					<img src={iconStar} alt="" className="self-center h-6 sm:h-full" />
					<span className="self-center ml-5">FAQs</span>
				</h2>
				<div className="mt-6 sm:mt-10 flex flex-col justify-stretch gap-y-8">
					{accordionFaqList.map((faq) => (
						<IndividualFAQ key={faq.question} faq={faq} />
					))}
				</div>
			</div>
		</div>
	);
};

export default FaqAccordion;
