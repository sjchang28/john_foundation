import Modal from 'react-bootstrap/Modal';
import React from 'react';

const ArticleInformation = ({
	header
}) => {
	return (
		<Modal
			isOpen={true}
			ariaHideApp={false}
		>
			<h1>{header}</h1>
		</Modal>
	);
}

export default ArticleInformation;