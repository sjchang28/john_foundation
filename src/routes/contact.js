import { React, Fragment, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import PageHeader from "../components/PageHeader.jsx";
import PageFooter from "../components/PageFooter.jsx";

import "../style/App.css"

const Contact = () => {
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
	
	return(
		<Fragment className="content">
			<PageHeader />
			<div className="page-information body-page-text">
			<h1>Contact Us</h1>
			<hr className="mt-3"/>
			<p className="mb-5">
				Connect with us at <a href="https://www.facebook.com/photo/?fbid=172692446141429&set=pb.100064813205707.-2207520000.">facebook.</a> <br />
			</p>
			
			<h2>Email Us Questions or Comments</h2>
			<div>
				Please fill out the form below to send us an email. We will get back to you as soon as possible.
			</div>
			<div className="section-card-information general-section-card">
				<Form onSubmit={handleSubmit} action="https://formspree.io/f/2142987692961430636" method="POST">
					<InputGroup className="mt-3 mb-3">
					<InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
					<Form.Control
						placeholder="First Name"
						aria-label="First Name"
						aria-describedby="basic-addon1"
						id="firstname" type="text" name="firstname" 
						className="form-control"
						required
					/>
					<ValidationError 
						prefix="firstname" field="firstname"
						errors={state.errors}
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
					<Form.Control
						placeholder="Last Name"
						aria-label="Last Name"
						aria-describedby="basic-addon1"
						id="lastname" type="text" name="lastname" 
						className="form-control"
						required
					/>
					<ValidationError 
						prefix="lastname" field="lastname"
						errors={state.errors}
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Subject</InputGroup.Text>
					<Form.Control
						placeholder="Subject"
						aria-label="Subject"
						aria-describedby="basic-addon1"
						id="subject" type="text" name="subject"
						className="form-control"
						required
					/>
					<ValidationError 
						prefix="subject" field="subject"
						errors={state.errors}
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
					<Form.Control
						placeholder="Email"
						aria-label="Email"
						aria-describedby="basic-addon1"
						id="email" type="email" name="email"
						className="form-control"
						required
					/>
					<ValidationError 
						prefix="email" field="email"
						errors={state.errors}
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Phone (Optional)</InputGroup.Text>
					<Form.Control
						placeholder="Phone (Optional)"
						aria-label="Phone (Optional)"
						aria-describedby="basic-addon1"
						id="phone" type="text" name="phone"
						className="form-control"
					/>
					<ValidationError 
						prefix="phone" field="phone"
						errors={state.errors}
					/>
					</InputGroup>

					<h5>Questions or Comments</h5>
					<InputGroup>
					<Form.Control placeholder="How Can We Help?" as="textarea" aria-label="With textarea" 
						id="message" name="message"
						className="form-control"
						required
					/>
					<ValidationError 
						prefix="message" field="message"
						errors={state.errors}
					/>
					</InputGroup>

					<div clasName="g-recaptcha mt-3 mb-3" 
						data-sitekey="6LcmK4EkAAAAAPT7ogAfGc80V_eQgVY_rvR2R-Ud"
					/>

					<Button className="p-2 mb-3 mt-3" 
						type="submit" 
						variant="primary"
						disabled={state.submitting}
					>
						Submit Info
					</Button>
				</Form>
			</div>
			</div>
			<PageFooter />
		</Fragment>
	);
};

export default Contact;