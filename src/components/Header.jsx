import { Fragment } from "react";

const Header = () => {
	return (
		<Fragment>
			<div className="header">
				<a href="/" className="logo">John D. Chang Foundation</a>
				<div className="header-right">
					<a href="/">Home</a>
					<a href="/scholarships_grants">Scholarships & Grants</a>
					<a href="/howcanihelp">How Can I Help</a>
					<a href="/contactus">Contact</a>
					<a href="/about">About</a>
				</div>
			</div>
		</Fragment>
  	);
};

export default Header;