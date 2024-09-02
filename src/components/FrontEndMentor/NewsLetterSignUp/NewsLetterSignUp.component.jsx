import { useState } from "react";
import "./NewsLetterSignUp.style.css";
import illustrationForDesktop from "../../../assets/FrontEndMentor/NewsLetterSignUp/illustration-sign-up-desktop.svg";
import illustrationForMobile from "../../../assets/FrontEndMentor/NewsLetterSignUp/illustration-sign-up-mobile.svg";
import iconForList from "../../../assets/FrontEndMentor/NewsLetterSignUp/icon-list.svg";

const checkIsEmailValid = (testEmail) => {
	const validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (testEmail.match(validRegex)) {
		return true;
	} else {
		return false;
	}
};

const NewsLetterSignUp = () => {
	const [inputEmail, setInputEmail] = useState("");
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [isSuccessfull, setIsSuccessfull] = useState(false);

	const emailCssValid =
		"text-base border border-NewsLetterSignUp-charcoalgrey rounded-lg p-4 hover:cursor-pointer";
	const emailCssInvalid =
		"text-base border border-NewsLetterSignUp-tomato bg-NewsLetterSignUp-lighttomato rounded-lg p-4 hover:cursor-pointer  text-NewsLetterSignUp-tomato";

	const handleEmailChange = (event) => {
		// console.log(event.target.value);

		setInputEmail(event.target.value);
		// console.log(inputEmail);
	};

	const dismissHandler = () => {
		setIsSuccessfull(false);
	};

	const submitHandler = (event) => {
		console.log(inputEmail);
		event.preventDefault();
		if (!checkIsEmailValid(inputEmail)) {
			setIsEmailValid(false);
		} else {
			setInputEmail("");
			setIsSuccessfull(true);
		}
	};

	return (
		<div className="h-screen sm:h-fit sm:bg-NewsLetterSignUp-charcoalgrey sm:p-10">
			{isSuccessfull ? (
				<div className="sm:max-w-md p-6 sm:p-10 bg-NewsLetterSignUp-white mx-auto my-auto sm:rounded-3xl h-5/6 flex flex-col justify-between sm:h-fit">
					<div className="mt-16 sm:mt-0">
						<img src={iconForList} alt="Success tick" className="h-14" />
						<h1 className="text-NewsLetterSignUp-darkgrey roboto-bold text-4xl sm:text-5xl mt-7">
							Thanks for subscribing!
						</h1>

						<p className="roboto-regular text-base py-5 text-NewsLetterSignUp-darkgrey">
							A confirmation email has been sent to{" "}
							<strong>{inputEmail}</strong>. Please open it and click the button
							inside to confirm your subscription.
						</p>
					</div>
					<button
						type="button"
						className="my-4 w-full bg-NewsLetterSignUp-darkgrey text-NewsLetterSignUp-white p-4 rounded-lg roboto-bold text-center hover:bg-gradient-to-r from-pink-400 to-NewsLetterSignUp-tomato "
						onClick={dismissHandler}>
						{" "}
						Dismiss message
					</button>
				</div>
			) : (
				<div className="flex flex-col sm:flex-row  sm:py-5 bg-NewsLetterSignUp-white sm:rounded-3xl max-w-4xl mx-auto text-NewsLetterSignUp-darkgrey items-stretch justify-items-stretch  ">
					<div className="flex justify-stretch sm:hidden w-full">
						<img
							src={illustrationForMobile}
							alt="illustration for signup"
							className="w-full"
						/>
					</div>

					<div className="sm:mx-10 sm:w-1/2 sm:flex sm:justify-center sm:items-center my-auto px-5 ">
						<div className="  flex flex-col justify-evenly  h-full">
							<header className="mt-10">
								<h1 className="text-NewsLetterSignUp-darkgrey roboto-bold text-4xl sm:text-5xl ">
									Stay updated!
								</h1>
								<p className="roboto-regular text-base my-6">
									Join 60,000+ product managers receiving monthly updates on:
								</p>
							</header>
							<ul className="flex flex-col gap-y-2">
								<li>
									<p className="flex items-start gap-x-5 text-base .roboto-regular">
										<span>
											<img src={iconForList} alt="" className="" />
										</span>
										Product discovery and building what matters
									</p>
								</li>
								<li>
									<p className="flex items-center gap-x-5 text-base .roboto-regular">
										<span>
											<img src={iconForList} alt="" className="" />
										</span>
										Measuring to ensure updates are a success
									</p>
								</li>
								<li>
									<p className="flex items-center gap-x-5 text-base .roboto-regular">
										<span>
											<img src={iconForList} alt="" className="" />
										</span>
										And much more!
									</p>
								</li>
							</ul>

							<div className="flex flex-col mt-16 mb-6">
								<div className="flex justify-between mb-2">
									<label className="text-sm roboto-bold ">Email address</label>
									<label
										className={`text-sm text-NewsLetterSignUp-tomato ${
											isEmailValid ? "invisible" : "visible"
										} `}>
										Valid email required
									</label>
								</div>
								<input
									type="email"
									name="email"
									value={inputEmail}
									onChange={handleEmailChange}
									placeholder="email@company.com"
									className={
										isEmailValid ? `${emailCssValid}` : `${emailCssInvalid}`
									}
								/>
								<button
									type="button"
									className="my-4 w-full bg-NewsLetterSignUp-darkgrey text-NewsLetterSignUp-white p-4 rounded-lg roboto-bold text-center hover:bg-gradient-to-r from-pink-400 to-NewsLetterSignUp-tomato "
									onClick={submitHandler}>
									Subscribe to monthly newsletter
								</button>
							</div>
						</div>
					</div>
					<div className="hidden sm:flex  sm:w-1/2  justify-end">
						<img
							src={illustrationForDesktop}
							alt="illustration for signup"
							className=" object-cover mr-5"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default NewsLetterSignUp;
