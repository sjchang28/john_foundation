import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { Container, Col, Row} from "react-bootstrap";
import { useState } from 'react';

import "../style/home.css";

const Article = ({
	image,
	header,
	date,
	text
}) => {
	const [readMore, setReadMore] = useState("Read More");
	const [readMoreText, setReadMoreText] = useState(false);
	const onClickReadMore = () => {
		setReadMore(readMoreText ? "Read More" : "Read Less");
		setReadMoreText(!readMoreText);
	};

	return (
		<Card bg="light" style={{margin:"0 auto", width: '90%'}} className="mb-1">
			<Card.Body>
				<Container fluid style={{disply:'flex', justifyContent:'left'}} className="no-gutter">
					<Row>
						<Col lg="auto" md ="auto" sm="auto">
							<Image src={image} rounded style={{width: '15rem', height: '10rem'}} className="thumbnail-image"/>
						</Col>
						<Col ld="9" md="8" sm="12">
							<Card.Title>
								<div className="article-header">
									<Card.Subtitle className='mt-2 text-muted'>{date}</Card.Subtitle>
									<h3>{header}</h3>
								</div>
							</Card.Title>
							<Card.Text>
								<div className="text-container" style={readMoreText ? ({height:"auto"}) : ({height:"3.7em"})}>
									{text}
								</div>
								<Button onClick={onClickReadMore} variant="link" className="read-more-button">{readMore}</Button>
							</Card.Text>
						</Col>
					</Row>
				</Container>
			</Card.Body>
		</Card>
	);
}

export default Article;

