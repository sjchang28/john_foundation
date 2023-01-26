import { Fragment } from "react";

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

import '../style/scholarships.css'

const Scholarships = () => {
	return(
		<Fragment>
			<Header />
			<div className="scholarship-information">
				<h1>Scholarships & Grants</h1>
				<p>
					The Foundation seeks to enhance the quality of life within the community by promoting harmony, respect for diversity, responsibility and academic achievement. By supporting the vision of John D. Chang, each of us really can make a difference. <br />
				</p>
				<div>
					<h2>The John Chang Scholarship Endowment Fund - FSU</h2>
					<p>
						We are working with the FSU Foundation ( <a href="https://www.foundation.fsu.edu">www.foundation.fsu.edu</a> ) to raise $100,000 for The John Chang Scholarship Endowment Fund , which will enable the university to provide a permanent, annual scholarship in the amount of $6,000. Please call 305-588-8209 for additional information. <br />
						<a href="/">Click Here to Make a Donation Online</a><br />
						<a href="/">Download Application</a>
					</p>
				</div>
				<div>
					<h2>Scholarships & Grants</h2>
					<p>
						The John D. Chang Scholar/Athlete Scholarship Program will honor two (2) Happy Hill Farm students at Dallas, Texas in 2006 as follows: 
							<ol>
								<li><b>One (1)</b> female student-athlete will be awarded a $1,500 scholarship. </li>
								<li><b>One (1)</b> male student-athlete will be awarded a $1,500 scholarship. </li>
							</ol>							
							<b>Requirements:</b> Applicants must be graduating this year and accepted by a 4 year college or University in 2006. Must be in financial need and have a minumum <b>Grade Point Average of 3.5</b>. Attendance in the college or University of the student's choice is required and scholarship funds will be sent directly to the school. <br />
						<a href="/">Download Application</a>
					</p>
				</div>
				<div>
					<h2>FSU-John D. Chang Scholarship in Media Production</h2>
					<p>
						FSU-John D. Chang Scholarship in Media Production The John D. Chang Scholarship in the amount of $2,500 will be awarded to a Florida State University student annually and will support undergraduate students in the College of Communication with a major in media production. The recipient must have a minimum <b>Grade Point Average of 3.0</b> and demonstrate financial need. <br />
						<a href="https://www.foundation.fsu.edu">Visit the FSU Website</a><br />
						<a href="/">Download Application</a>
					</p>
				</div>
				<div>
					<h2>Florida Delta Chapter of Phi Delta Theta at the University of Miami Scholarship</h2>
					<p>
						<b>Requirements:</b> Applicants must be graduating this year and accepted by a 4 year college or University in 2006. Must be in financial need and have a minumum <b>Grade Point Average of 3.5</b>. Attendance in the college or University of the student's choice is required and scholarship funds will be sent directly to the school. <br /><br />
						<b>Deadline:</b> March 20, 2006 <br />
						<a href="/">Download Application</a>
					</p>
				</div>
				<div>
					<h2>John D. Chang Scholarships in Miami, Florida</h2>
					<p>
						The John D. Chang Foundation will award the following three scholarships in Miami-Dade in 2006: 1. One (1) student-athlete of NORTH MIAMI SENIOR HIGH will be awarded a $1,000 scholarship; 2. One (1) student-athlete will be awarded a $1,000 scholarship; 3. One (1) student-athlete will be awarded a $500 scholarship. <br /><br />
						<b>Deadline:</b> March 20, 2006 <br />
						<a href="/">Download Application</a>
					</p>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

export default Scholarships;