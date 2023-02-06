import { Fragment, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import ReCAPTCHA from "react-google-recaptcha";

import PageHeader from "../components/PageHeader.jsx";
import PageFooter from "../components/PageFooter.jsx";

import "../style/App.css"

const Contact = () => {
	const [isVerified, setIsVerified] = useState(false);

	const [modalShow, setModalShow] = useState(false);
	// const [notifyUserTitle, setNotifyUserTitle] = useState("");
	// const [notifyUserMsg, setNotifyUserMsg] = useState("");

	const [form, setForm] = useState({
		subject: "",
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: ""
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onChangeReCAPTCHA = (value) => {
		console.log("Captcha value:", value)
		setIsVerified(true);
	};

	const sendInfo = (e) => {
		console.log(form.subject, form.firstName, form.lastName, form.email, form.message);
		if (!form.subject || !form.firstName || !form.lastName || !form.email || !form.message) {
			alert("Please fill out all fields.");
			return;
		}

		if (form.phone === "") {
			form.phone = "N/A";
		}

		window.Email.send({
				SecureToken : "1184605e-5dba-45dc-a0ec-32a13b203978",
				To : "johndchang.foundation@gmail.com",
				From : form.email,
				Subject : form.subject,
				Body : "Name: " + form.firstName + " " + form.lastName +
					"<br />Email: " + form.email +
					"<br />Phone: " +  +
					"<br />Message: " + form.message
		}).then(
			//updateModalMessage("Message Sent Successfully!", "We will get back to you as soon as possible.", "success")
			message => alert(message)
		);
		// .catch((error) => {
		// 	updateModalMessage("Message Didn't Send", "Try Again Later or Reach Out to Us on Facebook.", "failed");
		// });
	};

	// const updateModalMessage = (title, msg, state) => {
	// 	if (state === "success") {
	// 		setForm({
	// 			subject: "",
	// 			firstName: "",
	// 			lastName: "",
	// 			email: "",
	// 			phone: "",
	// 			message: ""
	// 		});
	// 	}

	// 	setNotifyUserTitle(title);
	// 	setNotifyUserMsg(msg);
	// 	setModalShow(true);
	// };

	const DisplayMessage = (props) => {
		return (
			<Modal
				{...props}
				size="sm"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						{props.title}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{props.msg}
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide} variant="primary">Close</Button>
				</Modal.Footer>
			</Modal>
		);
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
					<InputGroup className="mt-3 mb-3">
					<InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
					<Form.Control
						placeholder="First Name"
						aria-label="First Name"
						aria-describedby="basic-addon1"
						type="text" name="firstName" 
						value={form.firstName} 
						onChange={handleChange} 
						className="form-control"
						required
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
					<Form.Control
						placeholder="Last Name"
						aria-label="Last Name"
						aria-describedby="basic-addon1"
						type="text" name="lastName" 
						value={form.lastName} 
						onChange={handleChange} 
						className="form-control"
						required
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Subject</InputGroup.Text>
					<Form.Control
						placeholder="Subject"
						aria-label="Subject"
						aria-describedby="basic-addon1"
						type="text" name="subject" 
						value={form.subject} 
						onChange={handleChange} 
						className="form-control"
						required
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
					<Form.Control
						placeholder="Email"
						aria-label="Email"
						aria-describedby="basic-addon1"
						type="email" name="email" 
						value={form.email} 
						onChange={handleChange} 
						className="form-control"
						required
					/>
					</InputGroup>
					<InputGroup className="mb-3">
					<InputGroup.Text id="basic-addon1">Phone (Optional)</InputGroup.Text>
					<Form.Control
						placeholder="Phone (Optional)"
						aria-label="Phone (Optional)"
						aria-describedby="basic-addon1"
						type="text" name="phone" 
						value={form.phone} 
						onChange={handleChange} 
						className="form-control"
					/>
					</InputGroup>

					<h5>Questions or Comments</h5>
					<InputGroup>
					<Form.Control placeholder="How Can We Help?" as="textarea" aria-label="With textarea" 
						name="message" 
						value={form.message} 
						onChange={handleChange} 
						className="form-control"
						required
					/>
					</InputGroup>

					<ReCAPTCHA className="mt-3"
						//sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
						//sitekey={process.env["RECAPTCHA_SITE_KEY"]}
						sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
						onChange={onChangeReCAPTCHA}
					/>

					<Button className="p-2 mb-3 mt-3" 
						type="submit" 
						variant="primary"
						onClick={sendInfo}
						disabled={!isVerified}
					>
						Submit Info
					</Button>
				</div>
			</div>
			<PageFooter />

			<DisplayMessage
				show={modalShow}
				onHide={() => setModalShow(false)}
				// title={notifyUserTitle}
				// msg={notifyUserMsg}
			/>
		</Fragment>
	);
};

export default Contact;