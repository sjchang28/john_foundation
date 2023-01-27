import { Fragment } from "react";
import { Container, Col} from "react-bootstrap";

import PageHeader from '../components/PageHeader.jsx';
import Article from "../components/Article.jsx";
import PageFooter from '../components/PageFooter.jsx';

import '../style/App.css'

const Scholarships = () => {
	return(
		<Fragment>
			<PageHeader />
			<div className="page-information">
				<div className="body-page-text">
					<div>
						<header className="about-page-text-headers"><h1>Scholarships & Grants</h1></header>
						<hr className="mt-3"/>
						<p className="mb-5">
							The John D. Chang Foundation seeks to enhance the quality of life within the community by promoting harmony, respect for diversity, responsibility and academic achievement. By supporting the vision of John D. Chang, each of us really can make a difference. <br />
						</p>
					</div>
				</div>

				<Container>
				<Col>
					<Article 
						header="The John Chang Scholarship Endowment Fund - FSU"
						text={ <Fragment>
						<p>
							We are working with the FSU Foundation (<a href="https://www.foundation.fsu.edu">www.foundation.fsu.edu</a>) to raise $100,000 for the John Chang Scholarship Endowment Fund , which will enable the university to provide a permanent, annual scholarship in the amount of $6,000. Please call (305) 588-8209 for additional information. <br /><br />
							<a href="/">Click Here to Make a Donation Online</a><br />
							<a href="/">Download Application</a>
						</p>
						</Fragment>
						}
						scholarship={true}
					/>
					<Article 
						header="FSU-John D. Chang Scholarship in Media Production"
						text={ <Fragment>
						<p>
							FSU-John D. Chang Scholarship in Media Production the John D. Chang Scholarship in the amount of $2,500 will be awarded to a Florida State university student annually and will support undergraduate students in the College of Communication with a major in media production. The recipient must have a minimum <b>Grade Point Average of 3.0</b> and demonstrate financial need. <br /><br />
							<a href="https://www.foundation.fsu.edu">Visit the FSU Website</a><br />
							<a href="/">Download Application</a>
						</p>
						</Fragment>
						}
						scholarship={true}
					/>
					<Article 
						header="Florida Delta Chapter of Phi Delta Theta at the university of Miami Scholarship"
						text={ <Fragment>
						<p>
							<b>Requirements:</b> Applicants must be graduating this year and accepted by a 4 year college or university in 2006. Must be in financial need and have a minumum <b>Grade Point Average of 3.5</b>. Attendance in the college or university of the student's choice is required and scholarship funds will be sent directly to the school. <br /><br />
							<b>Deadline:</b> March 20, 2006 <br />
							<a href="/">Download Application</a>
						</p>
						</Fragment>
						}
						scholarship={true}
					/>
					<Article 
						header="John D. Chang Scholarships in Miami, Florida"
						text={ <Fragment>
						<p>
							The John D. Chang Foundation will award the following three scholarships in Miami-Dade in 2006:
							<ol>
								<li><b>One (1)</b> student-athlete of NORTH MIAMI SENIOR HIGH will be awarded a $1,000 scholarship. </li>
								<li><b>One (1)</b> student-athlete will be awarded a $1,000 scholarship. </li>
								<li><b>One (1)</b> student-athlete will be awarded a $500 scholarship.</li>
							</ol>
							<b>Deadline:</b> March 20, 2006 <br />
							<a href="/">Download Application</a>
						</p>
						</Fragment>
						}
						scholarship={true}
					/>
				</Col>
				</Container>
			</div>
			<PageFooter />
		</Fragment>
	);
};

export default Scholarships;