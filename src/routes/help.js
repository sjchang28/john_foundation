import { Fragment } from "react";

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import '../style/help.css';

const Help = () => {
	return(
		<Fragment>
			<Header />
				<div className="help-information">
				<h1>How Can I Help</h1> <br />
				<div>
					<h2>How to Give to the John D. Chang Foundation</h2>
					<p>
						The John D. Chang Foundation, Inc. was established on John's 39th birthday, January 4th, 2003. The purpose is to provide scholarships and support youth sports teams and community events. The foundation offers an easy way to help make a significant difference with your giving. <br /><br />
						
						<b>You Can Mail in Tax Deductible Contributions</b> <br />
						<div className="mailing-address">
							John D. Chang Foundation <br />
							9419 SW 56 Place <br />
							Gainesville, FL 32608 <br />
							USA <br /><br />
						</div>

						<b>Or You Can Donate Online</b> <br />
						<a href="/">Donate to Our Patreon</a> <br /><br />
					</p>
				</div>
				<div>
					<h2>Unrestricted & Designated Gifts</h2>
					<p>
						Gifts of any amount can be contributed to the foundation. Donors also may focus their financial support on scholarships or youth sports teams. <br /><br />
					</p>
				</div>
				<div>
					<h2>Memorial or Tribute Gifts</h2>
					<p>
						Gifts may be made - and will be acknowledged - honoring a person, a couple, a family, or an important life event, either as an unrestricted gift or as a designated or restricted gift. <br /><br />
					</p>
				</div>
				<div>
					<h2>For More Information</h2>
					<p>
						<a href="/contactus">Contact Us</a> to learn more about the John D. Chang Foundation's donor opportunities. 
					</p>
				</div>

				</div>
			<Footer />
		</Fragment>
	);
};

export default Help;