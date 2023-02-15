// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { React, Fragment, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Email = () => {
	const [state, handleSubmit] = useForm("mbjegelo");

	window.onload = function() { 
		var googleReCAPTCHA = document.getElementById('g-recaptcha-response'); 
		if (googleReCAPTCHA) { 
			googleReCAPTCHA.setAttribute('required', 'required'); 
		} 
	};
	
	window.onbeforeunload = () => {
		for(const form of document.getElementsByTagName('form')) {
		  form.reset();
		}
	};

	useEffect(() => {
		if (state.succeeded) {
			return <p>Thanks for Contacting Us! We'll get back to you soon.</p>;
		}
	}, [state.succeeded]);

	return (
		<Fragment>
			<Form
				action="https://formspree.io/f/mbjegelo"
				method="POST"
			>
				<InputGroup className="mt-3 mb-3">
				<InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
				<Form.Control
					placeholder="First Name"
					aria-label="First Name"
					aria-describedby="basic-addon1"
					type="text" id="firstname" name="First Name"
					className="form-control"
					required
				/>
				<ValidationError 
					prefix="First Name" 
					field="firstname"
					errors={state.errors}
				/>
				</InputGroup>
				<InputGroup className="mb-3">
				<InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
				<Form.Control
					placeholder="Last Name"
					aria-label="Last Name"
					aria-describedby="basic-addon1"
					type="text" id="lastname" name="Last Name"
					className="form-control"
					required
				/>
				<ValidationError 
					prefix="Last Name" 
					field="lastname"
					errors={state.errors}
				/>
				</InputGroup>
				<InputGroup className="mb-3">
				<InputGroup.Text id="basic-addon1">Subject</InputGroup.Text>
				<Form.Control
					placeholder="Subject"
					aria-label="Subject"
					aria-describedby="basic-addon1"
					type="text" id="subject" name="Subject" 
					className="form-control"
					required
				/>
				<ValidationError 
					prefix="Subject" 
					field="subject"
					errors={state.errors}
				/>
				</InputGroup>
				<InputGroup className="mb-3">
				<InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
				<Form.Control
					placeholder="Email"
					aria-label="Email"
					aria-describedby="basic-addon1"
					type="email" id="email" name="Email" 
					className="form-control"
					required
				/>
				<ValidationError 
					prefix="Email" 
					field="email"
					errors={state.errors}
				/>
				</InputGroup>
				<InputGroup className="mb-3">
				<InputGroup.Text id="basic-addon1">Phone (Optional)</InputGroup.Text>
				<Form.Control
					placeholder="Phone (Optional)"
					aria-label="Phone (Optional)"
					aria-describedby="basic-addon1"
					type="text" id="phone" name="Phone" 
					className="form-control"
				/>
				</InputGroup>

				<h5>Questions or Comments</h5>
				<InputGroup>
				<Form.Control placeholder="How Can We Help?" as="textarea" aria-label="With textarea" 
					id="message" name="Message"
					className="form-control"
					required
				/>
				<ValidationError 
					prefix="Message" 
					field="message"
					errors={state.errors}
				/>
				</InputGroup>

				{/* <div className="g-recaptcha" 
					data-sitekey={process.env["RECAPTCHA_SITE_KEY"]}
				/> */}

				<Button className="p-2 mb-3 mt-3" 
					type="submit" 
					variant="primary"
				>
					Submit Info
				</Button>
			</Form>
		</Fragment>
	);
}

export default Email;