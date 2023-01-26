import React, { Fragment } from 'react';
import { Container, Col} from "react-bootstrap";

import '../style/home.css';

import Header from '../components/Header.jsx';
import Article from '../components/Article.jsx';
import Footer from '../components/Footer.jsx';
import JohnPhoto from '../components/images/johnphoto.jpg';

const Home = () => {  
  return (
	<Fragment>
	<Header />
	<div>
		<div className="container container-photo">
			<img src={JohnPhoto} alt="Photo of John D. Chang"/>
			<div className="bottom-left">
				<h1>John D. Chang Foundation</h1>
				<p>
					In remembrance of John Chang's spirit of compassion, sincerity, and love, the John Chang Foundation was established to 
					promote harmony in the community and to support under-privileged youth in achieving their goals and realizing their dreams.
				</p>
			</div>
		</div>
		<Container className="articles">
			<header className="news-highlights-articles">News & Highlights</header>
			<Col>
				<Article 
					image = "https://tinyurl.com/dexrertr"
					header="John D. Chang Foundation Awards $5,500 in Scholarships to Florida Students"
					date="June 1, 2006"
					text={<p>
						MIAMI - June 1, 2006 - The John D. Chang Foundation is helping six Florida high-school and college students realize their dreams by awarding each a scholarship.
						The Foundation, established in memory of John Chang, a graduate of North Miami Senior High and Florida State University, has awarded $3,000 in scholarships to the following Miami-Dade County high school students:
						<ul>
							<li> $1,000 - Kemy Joseph</li>
							<li> $  500 - Jennifer Espinet </li>
							<li> $  500 - Raquel Guerin</li>
							<li> $  500 - Christopher Ramos</li>
							<li> $  500 - Leanne Penna is the winner of the Florida Phi Delta Theta Chapter of Phi Delta Theta at University of Miami Scholarship.</li>
						</ul>
						In addition, the Foundation has awarded a $2,500 in Scholarship to Julia McManus, a media production major at Florida State University.
						The Foundation will award two $1,500 scholarships to Dallas students this August.
						Chang was the director of broadcasting for the Dallas Cowboys when he died from a cerebral hemorrhage in 2002 at the age of 38. During his prestigious career in broadcast journalism as a videographer, editor, director, and manager, John covered the space shuttle Discovery launch, produced three Cowboys Super Bowl specials and developed the "Making of the Dallas Cowboys Cheerleader Calendar" program, which airs annually on ESPN.
						"John believed if you could dream it, it was possible," said Judy Lai, John's mother and the president of the John D. Chang Foundation. "He was always eager to help people in pursuit of their dreams, and that's what the John D. Chang Foundation is all about." <br/><br/>
		
						For more information, visit www.johndchang.org.
					</p>}
				/>
				<Article 
					image = "https://tinyurl.com/dexrertr"
					header="Broadcasting Director made indelible mark on Cowboys"
					date="February 10, 2005"
					text={<p>
						Dallas Morning News, The (TX) - February 10, 2005

						Broadcasting director made indelible mark on Cowboys
						Esther Wu

						I'm not a football fan, but even I watched Super Bowl XXXIX on Sunday. And I couldn't help but be reminded of John Chang of the Dallas Cowboys.
						You probably never heard of Mr. Chang. He never scored any touchdowns or coached players on the sidelines.
						But if you've ever watched Special Edition With Jerry Jones, Cowboys Huddle or a post-game locker room show, or heard play-by-play commentary over the Internet, you're familiar with John Chang's work.
						As the team's director of broadcasting for nine seasons, Mr. Chang's leadership helped Cowboys broadcasting grow into one of the National Football League's largest and most comprehensive in-house television production departments.
						"John had the rare and very unique combination of cutting-edge creativity and solid management skills," Cowboys owner Jerry Jones said. "He had vision, passion and a flair for innovation. He created and developed a television production unit for our organization that quickly became the standard for all NFL teams."
						Cowboys spokesman Rich Dalrymple said: "When John took over running our television department, it was one room where videotape was edited. But it was his vision and his ideas that provided the infrastructure for the broadcasting department we now have."
						The broadcast complex at Valley Ranch now houses a full-service television production studio, including editing bays, a sound studio and a communications system to produce daily Internet radio talk shows. One of the wings of the complex is even named for Mr. Chang.
						"We've grown from a studio that produced just two weekly half-hour taped programs to what is now the Dallas Cowboys Channel that provides four to six hours of live television daily," Mr. Dalrymple said.
						Unfortunately, the 38-year-old's career was cut short. On Dec. 12, 2002, three months before he was to be married, Mr. Chang died of a cerebral hemorrhage.
						"I don't think John knew how well-respected he was. Everyone - from players to members of the media - was at the funeral," said Rich Diesto, an intern with the Cowboys for two years.
						The two met when Mr. Diesto saw a men's ministry video that Mr. Chang helped produce. With Mr. Chang's encouragement, the software engineer began to learn about video productions at Valley Ranch.
						"No question was too big, and no favor was too small. He was always there for you. He was more than a teacher," Mr. Diesto said. "He was a friend. After he died, there was an emptiness at the studio. I couldn't bring myself to go back."
						Mr. Dalrymple said that he had been deleting and replacing numbers stored on his cellphone when I called him.
						"When I came across John's number ... I just couldn't bring myself to delete it."
						In September, Mr. Chang's mother, Judy Lai of Miami, came to Dallas to present the first John Chang Award of Excellence given to a Cowboys department head who exemplifies the same character and qualities as her son.
						"John loved football," Mrs. Lai said. "He once asked why he never got to play football when he was growing up. It broke my heart. I was a single mother raising four children. John had to work after school. He didn't have time to dream about football."
						For that reason, Mrs. Lai established the John D. Chang Foundation that will award scholarships to deserving students and sponsor seminars to encourage underprivileged teens to seek a college education.
						"John believed if you could dream it, it was possible," Mrs. Lai said. "He was always eager to help people in pursuit of their dreams, and that's what the foundation is all about."
						I don't like football, but I would have liked John Chang. <br/><br/>

						E-mail ewu@dallasnews.com <br/>
						Copyright, 2005, Dallas Morning News. All Rights Reserved.
					</p>}
				/>
				<Article 
					image = "https://tinyurl.com/dexrertr"
					header="John D. Chang Foundation Awards $5,500 in Scholarships"
					date="October 6, 2004"
					text={<p>
						MIAMI --- The John Chang Foundation is helping five Miami-Dade County high school graduates and one Florida State University student realize their dreams by awarding each a scholarship. <br/><br/>

						The Foundation, established in memory of John Chang, a graduate of North Miami Senior High and Florida State University, awarded $500 scholarships through the College Assistance Program (CAP, Inc.) to Ari Cuenin, Erica Cadet, Shaquellia Holmes, Wilbert Jerome, and Carlyle Turner. A $2,500 scholarship was awarded to Lindsey Mesa, an F.S.U. Media Production major.
						Chang was the director of broadcasting for the Dallas Cowboys when he died from a cerebral hemorrhage in 2002 at the age of 38. During his prestigious career in broadcast journalism as a videographer, editor, director, and manager, John covered the space shuttle Discovery launch, produced three Cowboys Super Bowl specials and developed the "Making of the Dallas Cowboys Cheerleader Calendar" program, which airs annually on ESPN.
						"John believed if you could dream it, it was possible," said Judy Lai, John's mother and the executive director of the John Chang Foundation. "He was always eager to help people in pursuit of their dreams, and that's what the John Chang Foundation is all about."
					</p>}
				/>
				<Article 
					image = "https://tinyurl.com/dexrertr"
					header="First Annual 'John D. Chang Award of Excellence Award"
					date="September 23, 2004"
					text={<p>
						MIAMI --The John Chang Foundation announces that Judy Lai, the mother of John Chang, was invited to attend the Dallas Cowboys 2004 Employee Years of Service Awards luncheon, and presented the first annual John Chang Award of Excellence. The John Chang Award will be presented annually to a Dallas Cowboys Department Head who displays the character and qualities of the late John Chang who directed the Cowboys television production department from 1993 to 2002. The recipient will be honored for his or her daily dedication and loyalty to the organization with an emphasis on the qualities that we all loved and admired in John Chang: teamwork, dependability, production, creativity, accountability, unselfishness and respect and love for fellow employees. The award will be given to an individual who has--through years of service--consistently made a positive difference in the daily operation of the organization...and someone who passionately strives to make a dynamic contribution to the Dallas Cowboys. "Being at the luncheon that honored John's character and being with his friends and colleagues who loved him made me very proud," said Lai.
						First "John Chang award of Excellence" was awarded to Bruce Hardy V.P and General Manager of Texas Stadium on September 23, 2004
					</p>}
				/>
				<Article 
					image = "https://tinyurl.com/dexrertr"
					header="John Chang Broadcasting Wing"
					date="July 1, 2004"
					text={<p>
						Dallas Cowboys Center
						Irving, Texas

						MIAMI----In June 2004, the Dallas Cowboys Football Club named their media production section at their Irving, Texas headquarters the "John Chang Broadcasting Wing." Chang was instrumental in the design and construction of the production section and upon his death, the Jones family dedicated the section in his memory. <br/><br/>

						"He inspired our organization, me personally in a way that we built a studio that is unsurpassed in sports. So the Cowboys, have broken new ground because of John Chang's quarterbacking that no team in the history of sports have ever been there and he not only built a great organization around him, but the very studio that were in and the very state of the art of it is John's signature." <br/><br/>

						Jerry Jones, Owner and General Manager of the Dallas Cowboys Football Club.
					</p>}
				/>
			</Col>
		</Container>
	</div>
	<Footer />
	</Fragment>
  );
};

export default Home;