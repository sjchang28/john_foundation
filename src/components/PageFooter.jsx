import { Fragment } from "react";

import "../style/App.css";

const PageFooter = () => {
	return (
		<Fragment>
			<div className="footer">
				<a href="/">
					<span className="logo-text">John D. Chang Foundation<span className="registered-trademark-symbol">®</span> </span><br />
					<div className="copyright-footer">Copyright © 2006 John D. Chang Foundation-All rights reserved.</div>
				</a>
				<div className="footer-right">
					<a href="/">Home</a>
					<a href="/howcanihelp">How Can I Help</a>
					<a href="/contactus">Contact</a>
					<a href="/privacy">Privacy</a>
				</div> <br /><br />
			</div>
		</Fragment>
  	);
};

export default PageFooter;
