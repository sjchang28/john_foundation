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
			<PageHeader activePage="contact" />
			<div className="page-information">
			<h1>Contact Us</h1>
				<div className="section-card-information">
					<header><h2>Sign Our Guest Book</h2></header>
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
					<InputGroup.Text id="basic-addon1">How Do You Know John?</InputGroup.Text>
					<Form.Control
						placeholder="How Do You Know John?"
						aria-label="How Do You Know John?"
						aria-describedby="basic-addon1"
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Company</InputGroup.Text>
					<Form.Control
						placeholder="Company"
						aria-label="Company"
						aria-describedby="basic-addon1"
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Your Title</InputGroup.Text>
					<Form.Control
						placeholder="Your Title"
						aria-label="Your Title"
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
					<InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
					<Form.Control
						placeholder="Phone"
						aria-label="Phone"
						aria-describedby="basic-addon1"
					/>
					</InputGroup>

					<h3>Address</h3>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Street Name</InputGroup.Text>
					<Form.Control
						placeholder="Street Name"
						aria-label="Street Name"
						aria-describedby="basic-addon1"
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">City</InputGroup.Text>
					<Form.Control
						placeholder="City"
						aria-label="City"
						aria-describedby="basic-addon1"
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">State</InputGroup.Text>
					<Form.Control
						placeholder="State"
						aria-label="State"
						aria-describedby="basic-addon1"
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Zip Code</InputGroup.Text>
					<Form.Control
						placeholder="Zip Code"
						aria-label="Zip Code"
						aria-describedby="basic-addon1"
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Country</InputGroup.Text>
					<Form.Control
						placeholder="Country"
						aria-label="Country"
						aria-describedby="basic-addon1"
					/>
					</InputGroup>
					<Button variant="primary" onClick={sendInfo}>Submit Info</Button>
				</div>

				<div className="section-card-information">
					<header><h2>Email Us Comments or Questions</h2></header>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
					<Form.Control
						placeholder="Name"
						aria-label="Name"
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
					<InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
					<Form.Control
						placeholder="Phone"
						aria-label="Phone"
						aria-describedby="basic-addon1"
					/>
					</InputGroup>

					<h5>Comments or Questions</h5>
					<InputGroup>
					<Form.Control as="textarea" aria-label="With textarea" />
					</InputGroup>
					<Button variant="primary" className="mt-2" onClick={sendInfo}>Submit Info</Button>
				</div>
			</div>
			<PageFooter />
		</Fragment>
	);
};

export default Contact;