import { Fragment } from "react";

import FoundationLogo from "./images/foundation_logo.png";
import "../style/App.css";

const PageHeader = () => {
	return (
		<Fragment className="content">
			<div className="header">
				<a href="/">
					<img src={FoundationLogo} alt="John D. Chang Foundation Logo" className="foundation-logo"/>
				</a>
				<div className="header-right">
					<a href="/">Home</a>
					<a href="/scholarships_grants">Scholarships & Grants</a>
					<a href="/waystogive">Ways to Give</a>
					<a href="/about">About</a>
					<a href="/contactus">Contact Us</a>
				</div>
			</div>
		</Fragment>
  	);
};

export default PageHeader;