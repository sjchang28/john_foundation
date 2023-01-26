import { Fragment } from "react";

const Header = () => {
	return (
		<Fragment>
			<div class="header">
				<a href="/" class="logo">John D. Chang Foundation</a>
				<div class="header-right">
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

export default Header;