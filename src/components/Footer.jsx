import { Fragment } from "react";

const Footer = () => {
	return (
		<Fragment>
			<div className="footer">
				<a href="/" className="logo">
					John D. Chang Foundation <br />
					<div className="copyright-footer">Copyright © 2006 John D. Chang Foundation-All rights reserved.</div>
				</a>
				<div className="footer-right">
					<a className="active" href="/">Home</a>
					<a href="/howcanihelp">How Can I Help</a>
					<a href="/contactus">Contact</a>
					<a href="/privacy">Privacy</a>
				</div> <br /><br />
			</div>
		</Fragment>
  	);
};

export default Footer;
