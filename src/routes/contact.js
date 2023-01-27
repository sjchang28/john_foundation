import { Fragment } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import PageHeader from '../components/PageHeader.jsx';
import PageFooter from '../components/PageFooter.jsx';

import '../style/App.css'

const Contact = () => {
	const sendInfo = () => {
	};
	
	return(
		<Fragment>
			<PageHeader />
			<div className="page-information body-page-text">
			<h1>Contact Us</h1>
			<hr className="mt-3"/>
			<p className="mb-5">
				Connect with us at <a href="https://www.facebook.com/photo/?fbid=172692446141429&set=pb.100064813205707.-2207520000.">facebook.</a> <br />
			</p>
			
			<h2>Email Us Questions or Comments</h2>
			<div>
				Please fill out the form below to send us an email. We will get back to you as soon as possible.
			</div>
				<div className="section-card-information general-section-card">
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Subject</InputGroup.Text>
					<Form.Control
						placeholder="Subject"
						aria-label="Subject"
						aria-describedby="basic-addon1"
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
					<Form.Control
						placeholder="First Name"
						aria-label="First Name"
						aria-describedby="basic-addon1"
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
					<Form.Control
						placeholder="Last Name"
						aria-label="Last Name"
						aria-describedby="basic-addon1"
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
					<Form.Control
						placeholder="Email"
						aria-label="Email"
						aria-describedby="basic-addon1"
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Phone (Optional)</InputGroup.Text>
					<Form.Control
						placeholder="Phone (Optional)"
						aria-label="Phone (Optional)"
						aria-describedby="basic-addon1"
					/>
					</InputGroup>

					<h5>Questions or Comments</h5>
					<InputGroup>
					<Form.Control as="textarea" aria-label="With textarea" />
					</InputGroup>

					{/* CAPTCHA */}
					<Button variant="primary" className="mt-2" onClick={sendInfo}>Submit Info</Button>
				</div>
			</div>
			<PageFooter />
		</Fragment>
	);
};

export default Contact;