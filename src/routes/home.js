// https://web.archive.org/web/20080818003039/http://www.johndchang.org:80/

import React, { Fragment } from 'react';
import { Container, Col} from "react-bootstrap";

import PageHeader from '../components/PageHeader.jsx';
import Article from '../components/Article.jsx';
import PageFooter from '../components/PageFooter.jsx';

import MainJohnPhoto from '../components/images/johnphoto.jpg';
import Awards5500FloridaStudents from '../components/images/5500.jpg';
import Awards5000FloridaStudents from '../components/images/5000.jpg';
import BroadcastingWing from '../components/images/broadcastingwing.jpg';
import MakesIndelibleMark from '../components/images/indeliblemark.jpg';
import ExcellenceAward from '../components/images/excellenceaward.jpg';

import '../style/App.css';

const Home = () => {  
  return (
	<Fragment>
	<PageHeader />
	<div className="content">
		<div className="container container-photo">
			<img src={MainJohnPhoto} alt="John D. Chang on The Job at the Los Angeles Raider's Stadium"/>
			<div className="statement-overlay">
				<h1>Providing Scholarships to Students Who Dare to Dream Big.</h1>
			</div>
		</div>
		<div className="mission-statement-information">
			<header className="home-page-text-headers">Our Mission Statement</header>
			<p className="mb-2">
				In remembrance of John Chang's spirit of compassion, sincerity, and love, the John Chang Foundation was established to promote harmony in the community and to support under-privileged youth in achieving their goals and realizing their dreams by providing grants and scholarships.
			</p>
			<hr className="mt-5" />
		</div>
		<Container className="articles">
			<header className="home-page-text-headers">News & Updates</header>
			<Col>
				<Article 
					image={Awards5500FloridaStudents}
					alt="John D. Chang Graduates from FSU"
					header="John D. Chang Foundation Awards $5,500 in Scholarships to Florida Students"
					date="June 1, 2006"
					text={<Fragment>
						MIAMI-June 1, 2006-The John D. Chang Foundation is helping six Florida high-school and college students realize their dreams by awarding each a scholarship. <br /><br />
						The Foundation, established in memory of John Chang, a graduate of North Miami Senior High and Florida State University, has awarded $3,000 in scholarships to the following Miami-Dade County high school students:
						<ul>
							<li> $1,000 - Kemy Joseph</li>
							<li> $500 - Jennifer Espinet </li>
							<li> $500 - Raquel Guerin</li>
							<li> $500 - Christopher Ramos</li>
							<li> $500 - Leanne Penna is the winner of the Florida Phi Delta Theta Chapter of Phi Delta Theta at University of Miami Scholarship.</li>
						</ul>
						In addition, the Foundation has awarded a $2,500 in Scholarship to Julia McManus, a media production major at Florida State University. <br /><br />
						The Foundation will award two $1,500 scholarships to Dallas students this August. <br /><br />
						Chang was the director of broadcasting for the Dallas Cowboys when he died from a cerebral hemorrhage in 2002 at the age of 38. During his prestigious career in broadcast journalism as a videographer, editor, director, and manager, John covered the space shuttle Discovery launch, produced three Cowboys Super Bowl specials and developed the "Making of the Dallas Cowboys Cheerleader Calendar" program, which airs annually on ESPN. <br /><br />
						"John believed if you could dream it, it was possible," said Judy Lai, John's mother and the president of the John D. Chang Foundation. "He was always eager to help people in pursuit of their dreams, and that's what the John D. Chang Foundation is all about." <br/><br/>
		
						For more information, visit <a href="www.johndchang.org">www.johndchang.org.</a> <br /><br />

						<a href="/about">About the John D. Chang Foundation</a><br />
					</Fragment>}
					longText={true}
				/>
				<Article 
					image={MakesIndelibleMark}
					alt="John D. Chang with His Dallas Cowboys Coworkers"
					header="Broadcasting Director Made Indelible Mark on Cowboys"
					date="February 10, 2005"
					text={<Fragment>
							<i>Esther Wu</i> <br /><br />

							<b>Dallas Morning News, The (TX)</b> <br />
							February 10, 2005 <br /><br />

							I'm not a football fan, but even I watched Super Bowl XXXIX on Sunday. And I couldn't help but be reminded of <b>John Chang</b> of the Dallas Cowboys. <br /><br />
							You probably never heard of Mr. Chang. He never scored any touchdowns or coached players on the sidelines. <br /><br />
							But if you've ever watched Special Edition With Jerry Jones, Cowboys Huddle or a post-game locker room show, or heard play-by-play commentary over the Internet, you're familiar with <b>John Chang</b>'s work. <br /><br />
							As the team's director of broadcasting for nine seasons, Mr. Chang's leadership helped Cowboys broadcasting grow into one of the National Football League's largest and most comprehensive in-house television production departments. <br /><br />
							"John had the rare and very unique combination of cutting-edge creativity and solid management skills," Cowboys owner Jerry Jones said. "He had vision, passion and a flair for innovation. He created and developed a television production unit for our organization that quickly became the standard for all NFL teams." <br /><br />
							Cowboys spokesman Rich Dalrymple said: "When John took over running our television department, it was one room where videotape was edited. But it was his vision and his ideas that provided the infrastructure for the broadcasting department we now have." <br /><br />
							The broadcast complex at Valley Ranch now houses a full-service television production studio, including editing bays, a sound studio and a communications system to produce daily Internet radio talk shows. One of the wings of the complex is even named for Mr. Chang. <br /><br />
							"We've grown from a studio that produced just two weekly half-hour taped programs to what is now the Dallas Cowboys Channel that provides four to six hours of live television daily," Mr. Dalrymple said. <br /><br />
							Unfortunately, the 38-year-old's career was cut short. On Dec. 12, 2002, three months before he was to be married, Mr. Chang died of a cerebral hemorrhage. <br /><br />
							"I don't think John knew how well-respected he was. Everyone - from players to members of the media - was at the funeral," said Rich Diesto, an intern with the Cowboys for two years. <br /><br />
							The two met when Mr. Diesto saw a men's ministry video that Mr. Chang helped produce. With Mr. Chang's encouragement, the software engineer began to learn about video productions at Valley Ranch. <br /><br />
							"No question was too big, and no favor was too small. He was always there for you. He was more than a teacher," Mr. Diesto said. "He was a friend. After he died, there was an emptiness at the studio. I couldn't bring myself to go back." <br /><br />
							Mr. Dalrymple said that he had been deleting and replacing numbers stored on his cellphone when I called him. <br /><br />
							"When I came across John's number ... I just couldn't bring myself to delete it." <br /><br />
							In September, Mr. Chang's mother, Judy Lai of Miami, came to Dallas to present the first <b>John Chang</b> Award of Excellence given to a Cowboys department head who exemplifies the same character and qualities as her son. <br /><br />
							"John loved football," Mrs. Lai said. "He once asked why he never got to play football when he was growing up. It broke my heart. I was a single mother raising four children. John had to work after school. He didn't have time to dream about football." <br /><br />
							For that reason, Mrs. Lai established the John D. Chang Foundation that will award scholarships to deserving students and sponsor seminars to encourage underprivileged teens to seek a college education. <br /><br />
							"John believed if you could dream it, it was possible," Mrs. Lai said. "He was always eager to help people in pursuit of their dreams, and that's what the foundation is all about." <br /><br />
							I don't like football, but I would have liked <b>John Chang</b>. <br/><br/>

							E-mail <a href="ewu@dallasnews.com">ewu@dallasnews.com</a> <br /><br />
							Copyright, 2005, Dallas Morning News. All Rights Reserved.
					</Fragment>}
					longText={true}
				/>
				<Article 
					image={Awards5000FloridaStudents}
					alt="Scholarship Winners from the John D. Chang Foundation"
					header="John D. Chang Foundation Awards $5,500 in Scholarships"
					date="October 6, 2004"
					text={<Fragment>
							MIAMI-The John Chang Foundation is helping five Miami-Dade County high school graduates and one Florida State University student realize their dreams by awarding each a scholarship. <br/><br/>
							The Foundation, established in memory of John Chang, a graduate of North Miami Senior High and Florida State University, awarded $500 scholarships through the College Assistance Program (CAP, Inc.) to Ari Cuenin, Erica Cadet, Shaquellia Holmes, Wilbert Jerome, and Carlyle Turner. A $2,500 scholarship was awarded to Lindsey Mesa, an F.S.U. Media Production major. <br /><br />
							Chang was the director of broadcasting for the Dallas Cowboys when he died from a cerebral hemorrhage in 2002 at the age of 38. During his prestigious career in broadcast journalism as a videographer, editor, director, and manager, John covered the space shuttle Discovery launch, produced three Cowboys Super Bowl specials and developed the "Making of the Dallas Cowboys Cheerleader Calendar" program, which airs annually on ESPN. <br /><br />
							"John believed if you could dream it, it was possible," said Judy Lai, John's mother and the executive director of the John Chang Foundation. "He was always eager to help people in pursuit of their dreams, and that's what the John Chang Foundation is all about." <br /><br />
					</Fragment>}
					longText={true}
				/>
				<Article 
					image={ExcellenceAward}
					alt="First Annual 'John D. Chang Award of Excellence' Award"
					header="First Annual 'John D. Chang Award of Excellence' Award"
					date="September 23, 2004"
					text={<Fragment>
						MIAMI-The John Chang Foundation announces that Judy Lai, the mother of John Chang, was invited to attend the Dallas Cowboys 2004 Employee Years of Service Awards luncheon, and presented the first annual John Chang Award of Excellence. The John Chang Award will be presented annually to a Dallas Cowboys Department Head who displays the character and qualities of the late John Chang who directed the Cowboys television production department from 1993 to 2002. The recipient will be honored for his or her daily dedication and loyalty to the organization with an emphasis on the qualities that we all loved and admired in John Chang: teamwork, dependability, production, creativity, accountability, unselfishness and respect and love for fellow employees. The award will be given to an individual who has--through years of service--consistently made a positive difference in the daily operation of the organization...and someone who passionately strives to make a dynamic contribution to the Dallas Cowboys. "Being at the luncheon that honored John's character and being with his friends and colleagues who loved him made me very proud," said Lai. <br /><br />
						First "John Chang award of Excellence" was awarded to Bruce Hardy V.P and General Manager of Texas Stadium on September 23, 2004.
					</Fragment>}
					longText={true}
				/>
				<Article 
					image={BroadcastingWing}
					alt="Dallas Cowboys Dedicate Plaque for the John D. Chang Production Wing"
					header="Dallas Cowboys Dedicate Production Wing in Memory of John D. Chang"
					date="July 1, 2004"
					text={<Fragment>
						<i>
							Dallas Cowboys Center <br />
							Irving, Texas <br /><br />
						</i>

						MIAMI-In June 2004, the Dallas Cowboys Football Club named their media production section at their Irving, Texas headquarters the "John Chang Broadcasting Wing." Chang was instrumental in the design and construction of the production section and upon his death, the Jones family dedicated the section in his memory. <br/><br/>
						<i>"He inspired our organization, me personally in a way that we built a studio that is unsurpassed in sports. So the Cowboys, have broken new ground because of John Chang's quarterbacking that no team in the history of sports have ever been there and he not only built a great organization around him, but the very studio that were in and the very state of the art of it is John's signature."</i> <br/><br/>
						Jerry Jones, Owner and General Manager of the Dallas Cowboys Football Club.
					</Fragment>}
					longText={true}
				/>
			</Col>
		</Container>
	</div>
	<PageFooter />
	</Fragment>
  );
};

export default Home;