import Article from '../components/Article.js';
import React, { Fragment } from 'react';
import { Container, Col, Row} from "react-bootstrap";

import '../style/home.css';

import JohnPhoto from '../components/images/johnphoto.jpg';

// https://www.joinonelove.org/

const Home = () => {
  //header w/ links
  //about mission
  //articles
  //footer

  //donation page
  //scholarship page
  //contact page

  return (
	<Fragment>
	<div>
		<div className="container container-photo">
			<img src={JohnPhoto} alt="John"/>
			<div class="bottom-left">
				<h1>John D. Chang Foundation</h1>
				<p>
					In remembrance of John Chang's spirit of compassion, sincerity, and love, the John Chang Foundation was established to 
					promote harmony in the community and to support under-privileged youth in achieving their goals and realizing their dreams.
				</p>
			</div>
		</div>
		<Container>
			<Row>
				<Col>
					<Article 
						image = "https://tinyurl.com/dexrertr"
						header="John D. Chang Foundation Awards $5,500 in Scholarships to Florida Students"
						date="June 1, 2006"
					/>
				</Col>
				<Col>
					<Article 
						image = "https://tinyurl.com/dexrertr"
						header="Broadcasting Director made indelible mark on Cowboys"
						date="February 10, 2005"
					/>
				</Col>
				<Col>
					<Article 
						image = "https://tinyurl.com/dexrertr"
						header="John D. Chang Foundation Awards $5,500 in Scholarships"
						date="October 06, 2004"
					/>
				</Col>
				<Col>
					<Article 
						image = "https://tinyurl.com/dexrertr"
						header="First Annual 'John D. Chang Award of Excellence' Award"
						date="September 23, 2004"
					/>
				</Col>
				<Col>
					<Article 
						image = "https://tinyurl.com/dexrertr"
						header="John Chang Broadcasting Wing"
						date="July 01, 2004"
					/>
				</Col>
			</Row>
		</Container>
	</div>
	</Fragment>
  );
};

export default Home;