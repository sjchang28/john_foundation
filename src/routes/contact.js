import { React, Fragment, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';
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
				<form onSubmit={handleSubmit}>
					<label htmlFor="email">
						Email Address
					</label>
					<input
						id="email"
						type="email" 
						name="email"
					/>
					<ValidationError 
						prefix="Email" 
						field="email"
						errors={state.errors}
					/><br />
					<textarea
						id="message"
						name="message"
					/>
					<ValidationError 
						prefix="Message" 
						field="message"
						errors={state.errors}
					/>

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
				</form>
			</div>
			</div>
			<PageFooter />
		</Fragment>
	);
};

export default Contact;