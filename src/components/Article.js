import React from 'react';
import Card from 'react-bootstrap/Card';
import ArticleInformation from './ArticleInformation.js';

const Article = ({
	image,
	header,
	date,
	link
}) => {
	const visitLink = () => {
		return (
			<ArticleInformation header={header} />
		);
	};

	return (
		<Card style={{width: '18rem'}} onClick={visitLink}>
			<Card.Body>
				<Card.Subtitle className='mb-2 text-muted'>{date}</Card.Subtitle>
				<Card.Title>{header}</Card.Title>
			</Card.Body>
		</Card>
	);
}

export default Article;

