import { useState } from "react";

const defaultFormFields = {
	queryType: undefined,
	firstName: "",
	lastName: "",
	email: "",
	textMessage: "",
	consentCheck: false,
};

const cssForRequiredFields =
	"after:content-['*'] after:ml-1 after:text-FEContactForm-green600";

const FEContactForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
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
		console.log(formFields);
		setFormFields(defaultFormFields);
	};

	return (
		<div className="ml-10">
			<div className="test ">Test Here</div>
			<form onSubmit={submitHandler}>
				<div className="">
					<label htmlFor="firstName" className={`${cssForRequiredFields}`}>
						First Name
					</label>
					<input
						type="text"
						name="firstName"
						value={firstName}
						required
						onChange={onFieldsChange}
						id="firstName"
					/>
					<p>Please enter First Name</p>
				</div>

				<div className="">
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
					/>
					<p>Please enter Last Name</p>
				</div>

				<div className="">
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
					/>
					<p>Please enter a valid email address</p>
				</div>

				<fieldset>
					<legend className={`${cssForRequiredFields}`}>Query Type</legend>
					<input
						type="radio"
						name="queryType"
						value="generalEnquiry"
						id="generalEnquiry"
						onChange={onFieldsChange}
					/>
					<label htmlFor="generalEnquiry">General Enquiry</label>

					<input
						type="radio"
						name="queryType"
						value="supportRequest"
						id="supportRequest"
						onChange={onFieldsChange}
					/>
					<label htmlFor="supportRequest">Support Request</label>
					<p>Please select a query type</p>
				</fieldset>

				<div className="">
					<label htmlFor="textMessage" className={`${cssForRequiredFields}`}>
						Message
					</label>
					<textarea
						name="textMessage"
						value={textMessage}
						required
						onChange={onFieldsChange}
						id="textMessage"
					/>
					<p>This field is required</p>
				</div>

				<div className="">
					<label htmlFor="consentCheck" className={`${cssForRequiredFields}`}>
						I consent to being contacted by the team
					</label>
					<input
						type="checkbox"
						name="consentCheck"
						value={consentCheck}
						checked={consentCheck}
						required
						onChange={onFieldsChange}
						id="consentCheck"
					/>
					<p>To submit this form,please consent to be contacted</p>
				</div>

				<div className="">
					<button type="submit">This is a submit button</button>
				</div>
			</form>
		</div>
	);
};

export default FEContactForm;
