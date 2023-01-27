import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { Container, Col, Row} from "react-bootstrap";
import { useState } from 'react';

import "../style/App.css";

const Article = ({
	image,
	alt,
	header,
	date,
	text,
	longText,
	scholarship
}) => {
	const [readMore, setReadMore] = useState("Read More");
	const [readMoreText, setReadMoreText] = useState(false);
	const onClickReadMore = () => {
		setReadMore(readMoreText ? "Read More" : "Read Less");
		setReadMoreText(!readMoreText);
	};

	return (
		<Card bg="light" style={{margin:"0 auto", width: '90%'}} className="mt-3 mb-3">
			<Card.Body>
				<Container fluid style={{disply:'flex', justifyContent:'left'}} className="no-gutter">
					<Row>
						{
							scholarship ? (
								<div />
							) : (
								<Col lg="auto" md ="auto" sm="auto">
									<Image src={image} alt={alt} rounded style={{width: '15rem', height: '10rem'}} className="thumbnail-image"/>
								</Col>
							)
						}
						<Col lg={(scholarship) ? ("12") : ("9")} md={(scholarship) ? ("12") : ("8")} sm="12">
							<Card.Title>
								<div className="article-header">
									{scholarship ? (<div />) : (<Card.Subtitle className='mt-2 text-muted'>{date}</Card.Subtitle>)} 
									<h3>{header}</h3>
								</div>
							</Card.Title>
							<div className="text-container" style={(readMoreText || scholarship) ? ({height:"auto"}) : ({height:"3.7em"})}>
								{text}
							</div>
							{
								(longText || !scholarship) ? (<Button onClick={onClickReadMore} variant="link" className="read-more-button">{readMore}</Button>) : (<div />)
							}
						</Col>
					</Row>
				</Container>
			</Card.Body>
		</Card>
	);
}

export default Article;

