import { Fragment } from "react";

const Footer = () => {
	// Facebook Logo
	// Mission Statement

	// Contact Us Information
	// Email Us
	// Copyright Information

	// Have every link again
	// Privacy policy

	return (
		<Fragment>
			<div class="footer">
				<a href="/" class="logo">John D. Chang Foundation</a>
				<div class="footer-right">
					<a className="active" href="/">Home</a>
					<a href="/scholarships_grants">Scholarships & Grants</a>
					<a href="/howcanihelp">How Can I Help</a>
					<a href="/contactus">Contact</a>
					<a href="/about">About</a>
				</div>
			</div>
		</Fragment>
  	);
};

export default Footer;
