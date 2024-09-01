import { useState } from "react";

const defaultFormFields = {
	queryType: undefined,
	firstName: "",
	lastName: "",
	email: "",
	textMessage: "",
	consentCheck: false,
};

const isEmailValid = (testEmail) => {
	const validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (testEmail.match(validRegex)) {
		return true;
	} else {
		return false;
	}
};

const cssForRequiredFields =
	"after:content-['*'] after:ml-1 after:text-FEContactForm-green600";

const cssForFocusandHoverStates =
	"cursor-pointer border border-FEContactForm-grey900 rounded-lg focus:outline-none focus:border-FEContactForm-green600 focus:ring-FEContactForm-green600 focus:ring-1 hover:outline-none hover:border-FEContactForm-green600 hover:ring-FEContactForm-green600 hover:ring-1 px-2 py-3 mt-2 mb-3";

const FEContactForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const [displayRequiredError, setDisplayRequiredError] = useState(false);
	const [successMessage, setSuccessMessage] = useState(false);

	const { queryType, firstName, lastName, email, textMessage, consentCheck } =
		formFields;

	const onFieldsChange = (event) => {
		const { name, value } = event.target;
		// console.log(name, value);

		if (name !== "consentCheck") {
			setFormFields({
				...formFields,
				[name]: value,
			});
		} else {
			setFormFields({
				...formFields,
				[name]: value === "true" ? false : true,
			});
		}
		// console.log(name, value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		console.log("Form Submitted");
		// console.log(formFields);

		if (
			!queryType ||
			!firstName ||
			!lastName ||
			!isEmailValid(email) ||
			!textMessage ||
			!consentCheck
		) {
			console.log("missing data");
			setDisplayRequiredError(true);
		} else {
			console.log("all fields correct");
			console.log(formFields);

			setDisplayRequiredError(false);
			setSuccessMessage(true);

			setFormFields(defaultFormFields);
		}

		// setFormFields(defaultFormFields);
	};

	return (
		<div className="mt-24 mx-auto max-w-3xl text-md font-light text-FEContactForm-grey900 m-3 relative">
			{!displayRequiredError && successMessage && (
				<div className="absolute bottom-full flex justify-center w-full z-20">
					<div className=" bg-green-950 text-FEContactForm-white w-2/3 p-3 rounded-lg ">
						<div className="text-white ">
							<p className="font-bold text-md">Success Message</p>
							<p className="text-sm">
								Thanks for completing the form. We'll be in touch soon
							</p>
						</div>
					</div>
				</div>
			)}

			<form className="flex flex-col bg-FEContactForm-white p-8 border-2 border-FEContactForm-white rounded-xl">
				<h2 className="text-3xl font-medium">Contact Us</h2>

				<div className="mt-7 md:flex justify-between gap-x-4 ">
					<div className="md:w-1/2">
						<label htmlFor="firstName" className={`${cssForRequiredFields}`}>
							First Name
						</label>
						<input
							type="text"
							name="firstName"
							value={firstName}
							onChange={onFieldsChange}
							id="firstName"
							required
							className={`peer w-full  ${cssForFocusandHoverStates} ${
								displayRequiredError && " required:border-FEContactForm-red  "
							}`}
						/>

						{displayRequiredError && (
							<p className="peer-required:visible text-FEContactForm-red text-sm invisible">
								Please enter First Name
							</p>
						)}
					</div>

					<div className="md:w-1/2">
						<label htmlFor="lastName" className={`${cssForRequiredFields}`}>
							Last Name
						</label>
						<input
							type="text"
							name="lastName"
							value={lastName}
							required
							onChange={onFieldsChange}
							id="lastName"
							className={`w-full peer ${cssForFocusandHoverStates}    ${
								displayRequiredError && " required:border-FEContactForm-red "
							}`}
						/>
						{displayRequiredError && (
							<p className="peer-required:visible text-FEContactForm-red text-sm invisible">
								Please enter Last Name
							</p>
						)}
					</div>
				</div>

				<div className="mt-6 flex flex-col">
					<label htmlFor="email" className={`${cssForRequiredFields}`}>
						Email Address
					</label>
					<input
						type="email"
						name="email"
						value={email}
						required
						onChange={onFieldsChange}
						id="email"
						className={`peer ${cssForFocusandHoverStates}  ${
							displayRequiredError && " required:border-FEContactForm-red "
						}`}
					/>
					{displayRequiredError && (
						<p className="peer-required:visible text-FEContactForm-red text-sm invisible ">
							Please enter a valid email address
						</p>
					)}
				</div>

				<fieldset className="mt-5 flex flex-col w-full">
					<legend className={`${cssForRequiredFields}`}>Query Type</legend>

					<div className="mt-3 mb-3 text-lg flex flex-col md:flex-row w-full gap-5 ">
						<div
							className={`flex items-center w-full md:w-1/2  border  border-FEContactForm-grey500 rounded-lg p-3  ${
								queryType === "generalEnquiry" && "bg-FEContactForm-green200"
							}`}>
							<input
								type="radio"
								name="queryType"
								value="generalEnquiry"
								id="generalEnquiry"
								onChange={onFieldsChange}
								className={`cursor-pointer checked:accent-FEContactForm-green600 mx-4 size-5 `}
							/>
							<label htmlFor="generalEnquiry" className="cursor-pointer">
								General Enquiry
							</label>
						</div>

						<div
							className={`flex items-center w-full md:w-1/2 border  border-FEContactForm-grey500 rounded-lg p-3 ${
								queryType === "supportRequest" && "bg-FEContactForm-green200"
							}`}>
							<input
								type="radio"
								name="queryType"
								value="supportRequest"
								id="supportRequest"
								onChange={onFieldsChange}
								className={`cursor-pointer checked:accent-FEContactForm-green600 mx-3 size-5 `}
							/>
							<label htmlFor="supportRequest" className={`cursor-pointer`}>
								Support Request
							</label>
						</div>
					</div>

					{displayRequiredError && (
						<p
							className={`my-2 text-sm text-FEContactForm-red ${
								!queryType ? "visible" : "invisible"
							}`}>
							Please select a query type
						</p>
					)}
				</fieldset>

				<div className="mt-4 flex flex-col">
					<label htmlFor="textMessage" className={`${cssForRequiredFields}`}>
						Message
					</label>
					<textarea
						name="textMessage"
						value={textMessage}
						required
						onChange={onFieldsChange}
						id="textMessage"
						className={`peer h-52 md:h-24 ${cssForFocusandHoverStates}  ${
							displayRequiredError && " required:border-FEContactForm-red "
						}`}
					/>
					{displayRequiredError && (
						<p className="peer-required:visible text-FEContactForm-red text-sm invisible mb-4">
							Please enter a Message
						</p>
					)}
				</div>

				<div className="mt-5 mb-5">
					<div className=" flex flex-col ">
						<div className="flex items-center">
							<input
								type="checkbox"
								name="consentCheck"
								value={consentCheck}
								checked={consentCheck}
								required
								onChange={onFieldsChange}
								id="consentCheck"
								className={`peer/consent checked:accent-FEContactForm-green600 mr-4 size-4`}
							/>
							<label
								htmlFor="consentCheck"
								className={`${cssForRequiredFields} `}>
								I consent to being contacted by the team
							</label>
						</div>
						{displayRequiredError && !consentCheck && (
							<p className="basis-full w-full  text-FEContactForm-red  mt-2 mb-2  ">
								To submit this form, please consent to being contacted
							</p>
						)}
					</div>
				</div>

				<div className=" w-full mt-3">
					<button
						type="button"
						onClick={submitHandler}
						className="w-full bg-FEContactForm-green600 text-FEContactForm-white rounded-lg font-semibold py-4 hover:brightness-50">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default FEContactForm;
