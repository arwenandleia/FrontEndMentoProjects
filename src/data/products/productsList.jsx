import FaqAccordion from "../../components/FrontEndMentor/FaqAccordion/FaqAccordion.component";
import SocialLinksProfile from "../../components/FrontEndMentor/SocialLinksProfile/SocialLinksProfile.component";
import FEContactForm from "../../components/FrontEndMentor/FEContactForm/FEContactForm.component";

export const productsList = [
	{
		title: "Social Links Profile",
		linkTo: "sociallinksprofile",
		component: <SocialLinksProfile />,
	},
	{
		title: "FAQ Accordion",
		linkTo: "faqaccordion",
		component: <FaqAccordion />,
	},
	{
		title: "Contact Form",
		linkTo: "fecontactform",
		component: <FEContactForm />,
	},
];
