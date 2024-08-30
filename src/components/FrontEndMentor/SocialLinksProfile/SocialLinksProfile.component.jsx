import avatarJessica from "../../../assets/FrontEndMentor/SocialLinksProfile/avatar-jessica.jpeg";

const SocialLinksProfileButton = ({ buttonText }) => (
	<button className="text-SocialLinksProfile-white w-full bg-SocialLinksProfile-grey700 text-center py-3 hover:bg-SocialLinksProfile-green hover:text-SocialLinksProfile-grey900 rounded-lg font-semibold text-sm">
		{buttonText}
	</button>
);

const socialSitesList = [
	"GitHub",
	"Frontend Mentor",
	"LinkedIn",
	"Twitter",
	"Instagram",
];

const SocialLinksProfile = () => {
	return (
		<div className="w-full h-full bg-SocialLinksProfile-grey900 p-6 rounded-2xl">
			<div className="max-w-[375px]  flex flex-col items-center mx-auto  bg-SocialLinksProfile-grey800 rounded-xl">
				<img
					src={avatarJessica}
					alt="profile image"
					className="rounded-full size-24 mt-8"
				/>
				<h2 className="text-SocialLinksProfile-white font-semibold text-2xl mt-8">
					Jessica Randall
				</h2>
				<h4 className="text-SocialLinksProfile-green font-bold text-sm mt-1">
					London, United Kingdom
				</h4>
				<p className="text-SocialLinksProfile-white font-normal text-sm mt-6">
					"Front-end developer and avid reader."
				</p>
				<div className="flex flex-col items-center justify-stretch w-full gap-y-4 px-10 mt-5 mb-8">
					{socialSitesList.map((site) => (
						<SocialLinksProfileButton buttonText={site} key={site} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SocialLinksProfile;
