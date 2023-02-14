import { Fragment } from "react";

import PageHeader from '../components/PageHeader.jsx';
import PageFooter from '../components/PageFooter.jsx';

import WaysToGivePhoto from '../components/images/waystogive.jpg';

import '../style/App.css';

const WaysToGive = () => {
	return(
		<Fragment className="content">
			<PageHeader />
			<div className="page-information">
			<div className="container container-photo">
				<img src={WaysToGivePhoto} alt="John D. Chang"/>
				<div className="image-overlay">
					<h1>Ways to Give</h1>
					<p>
						Underprivileged students can apply for scholarships from the John D. Chang Foundation. The foundation provides a simple method for you to make a big impact with your donations. Decide which approach suits you the most.					
					</p>
				</div>
			</div>

			<div className="body-page-text">
				<h1 className="mt-5">Your Donation Makes an Impact</h1>
					<p>
						The John D. Chang Foundation, Inc. was established on John's 39th birthday, January 4th, 2003. The purpose is to provide scholarships and support youth sports teams and community events. The foundation offers an easy way to help make a significant difference with your giving. <br /><br />
						
						<h4>Mail in Tax Deductible Contributions</h4>
						<div>
							John D. Chang Foundation <br />
							9419 SW 56 Place <br />
							Gainesville, FL 32608 <br />
							USA <br /><br />
						</div>

						{/* <h4>Donate Online</h4>
						<Button className="p-2">Donate Now</Button> <br /><br /> */}

						<h4>Unrestricted & Designated Gifts</h4>
						<p>
							Gifts of any amount can be contributed to the foundation. Donors also may focus their financial support on scholarships or youth sports teams. <br />
						</p>
						<h4>Memorial or Tribute Gifts</h4>
						<p>
							Gifts may be made - and will be acknowledged - honoring a person, a couple, a family, or an important life event, either as an unrestricted gift or as a designated or restricted gift. <br /><br />
						</p>
					</p>
					<h2>For More Information</h2>
					<p>
						<a href="/contactus">Contact Us</a> to learn more about the John D. Chang Foundation's donor opportunities. Thank you for supporting the John D. Chang Foundation!
					</p> 
				</div>
			</div>
			<PageFooter />
		</Fragment>
	);
};

export default WaysToGive;