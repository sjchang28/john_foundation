import { React, Fragment } from "react";

import PageHeader from "../components/PageHeader.jsx";
import Email from "../components/Email.jsx";
import PageFooter from "../components/PageFooter.jsx";

import "../style/App.css"

const Contact = () => {
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
				<Email />
			</div>
			</div>
			<PageFooter />
		</Fragment>
	);
};

export default Contact;