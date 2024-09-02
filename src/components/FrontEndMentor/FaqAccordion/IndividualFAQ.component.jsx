import { useState } from "react";
import iconPlus from "../../../assets/FrontEndMentor/FaqAccordion/icon-plus.svg";
import iconMinus from "../../../assets/FrontEndMentor/FaqAccordion/icon-minus.svg";

const IndividualFAQ = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => setIsOpen(!isOpen);

	return (
		<div className="flex flex-col justify-stretch border-b border-FaqAccordion-lightPink last:border-0 ">
			<div className="flex flex-row items-center justify-between">
				<div
					className=" text-FaqAccordion-darkPurple font-semibold cursor-pointer  hover:font-extrabold hover:brightness-[4]"
					onClick={toggleIsOpen}>
					{faq.question}
				</div>
				<div className="plusorminus shrink-0">
					{!isOpen ? (
						<button role="tab">
							<img
								src={iconPlus}
								alt="plus"
								onClick={toggleIsOpen}
								className="cursor-pointer  "
							/>
						</button>
					) : (
						<button role="tab">
							<img
								src={iconMinus}
								alt="minus"
								onClick={toggleIsOpen}
								className="cursor-pointer  "
							/>
						</button>
					)}
				</div>
			</div>
			{isOpen && (
				<div className=" text-FaqAccordion-grayishPurple">{faq.answer}</div>
			)}
		</div>
	);
};

export default IndividualFAQ;
