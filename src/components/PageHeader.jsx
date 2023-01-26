import { Fragment } from "react";

import "../style/App.css";

const PageHeader = ({
	activePage
}) => {
	return (
		<Fragment>
			<div className="header">
				<a href="/" className="logo">John D. Chang Foundation</a>
				<div className="header-right">
					<a className={(activePage==="home") ? "active" : ""} href="/">Home</a>
					<a className={(activePage==="scholarships") ? "active" : ""} href="/scholarships_grants">Scholarships & Grants</a>
					<a className={(activePage==="help") ? "active" : ""} href="/howcanihelp">How Can I Help</a>
					<a className={(activePage==="contact") ? "active" : ""} href="/contactus">Contact</a>
					<a className={(activePage==="about") ? "active" : ""} href="/about">About</a>
				</div>
			</div>
		</Fragment>
  	);
};

export default PageHeader;