import { Fragment, useState } from "react";

import "../style/App.css";

const PageFooter = () => {
	const [currentYear, setCurrentYear] = useState("2023");

	const getCurrentYear = () => {
		return new Date().getFullYear();
	};

	return (
		<Fragment>
			<div className="contnent footer">
				<a href="/">
					<span className="logo-text">John D. Chang Foundation<span className="registered-trademark-symbol">®</span> </span><br />
					<div className="copyright-footer">Copyright © {getCurrentYear()} John D. Chang Foundation-All rights reserved.</div>
				</a>
				<div className="footer-right">
					<a href="/">Home</a>
					<a href="/waystogive">Ways to Give</a>
					<a href="/contactus">Contact</a>
					<a href="/privacy">Privacy</a>
				</div> <br /><br />
			</div>
		</Fragment>
  	);
};

export default PageFooter;
