import { Fragment } from "react";

import Header from '../components/Header.jsx';
import Article from '../components/Article.jsx';
import Footer from '../components/Footer.jsx';

import '../style/about.css'

const About = () => {
	return(
		<Fragment>
			<Header />
			<div className="about-article">
				<header><h1>About The John D. Chang Foundation</h1></header>
				<p>
					The John D. Chang Foundation was established to honor John's memory by supporting the two passions of his life: sports and broadcast journalism. <br /><br />
					The Foundation is guided by the values that were central to John's life and include a spirit of caring, a commitment to excellence, compassion and love. To further those values, the Foundation will provide scholarships to students pursuing a career in broadcasting and support youth sports teams and community events. <br /><br />
					The Foundation seeks to enhance the quality of life within the community by promoting harmony, respect for diversity, responsibility and academic achievement. By supporting the vision of John D. Chang, each of us really can make a difference.
				</p>
			</div>
			<div className="about-article">
				<header><h1>About John D. Chang</h1></header>
				<p>
					John Chang, Director of Broadcasting, Dallas Cowboys <br />
					<i>Jan. 4, 1964 - Dec. 12, 2002</i><br /><br />

					Members of the Dallas Cowboys football organization remembered John Chang, the team's Director of Broadcasting, as a popular, hard-working front office administrator who had a smile and kind word for everyone with whom he came in contact. Chang passed away at Parkland Hospital in Dallas on Thursday, December 12th, 2002 after suffering from a cerebral hemorrhage. He was 38 years of age. <br /><br />
					"Our thoughts, prayers, and deepest sympathy are with John's family, his fiancée, and everyone who loved him," said Cowboys owner and general manager Jerry Jones. "John will be remembered as a wonderful person who touched all of our lives with his kindness, his professionalism, and his genuine love for people. He had tremendous talent and was a great contributor to this organization. He was, and will always remain, a cherished member of the Dallas Cowboys family." <br /><br />
					Chang was a valued member of the Dallas Cowboys broadcasting department. He was hired on March 4, 1991, assuming the position of Senior Editor / Videographer in the club's television department. Chang was promoted to the position of Director of Television for the Cowboys prior to the 1993 season. In 2001, he became the team's Director of Broadcasting. <br /><br />
					Under his direction, Cowboys broadcasting grew into the NFL's largest and most comprehensive in-house television production department. Chang and his staff annually produced the club's preseason games, two weekly in-season television shows, 16 regular season post-game shows, and a series of annual one-hour television specials. All of this programming is syndicated to over 25 markets throughout the five-state SilverStar Network. Chang oversaw the production of all three of the Cowboys Super Bowl Specials in the weeks leading up to the club's World Championships in 1992, 1993 and 1995. His development of the "Making of the Dallas Cowboys Cheerleader Calendar" program became a popular property that is annually aired nationally on ESPN. In 2002, he served as the coordinating producer for all Dallas Desperados game broadcasts in the inaugural season of the Arena Football League Team. Recently a new in-house production facility was built at the Cowboys Valley Ranch. "John played an integral role in designing the facility from the studio to the chairs", said Jerry Jones. (FROM VIDEO) <br /><br />
					Born in Thailand, but notably a local native of Miami, Chang graduated from North Miami Senior High School in 1981. While attending Florida State University from 1980 - 1984 John was influential in creating "1800 Seconds", a student directed broadcast, which aired locally around the Tallahassee area. Prior to joining the Cowboys, Chang spent seven years working in local television in Florida. After graduating from Florida State University with a Broadcast Journalism degree in the summer of 1984, he began his career at Channel 10 WPLG-TV an ABC affiliate in Miami. From 1986 - 1988 he moved to Jacksonville and worked at WJXT-TV, and then on to WTSP-TV in St. Petersburg, Florida from 1988 - 1991. In 1991 John worked with the crew of Good Morning America to cover the Space Shuttle Discovery Launch.
				</p>
			</div>

			<h1 className="john-stories">Stories about John D. Chang</h1>
			<Article 
					image = "https://tinyurl.com/dexrertr"
					header="John not only taught me how to shoot, edit, create graphics, and produce for television, he also taught me how to be a better person."
					date="January 4, 2007"
					text={<div>
						I came to meet John Chang in October of 1995. Fresh out of college I was fortunate enough to become an intern for the Dallas Cowboys. I was hoping to gain valuable experience in television production & little did I know I would learn so much more...
					</div>}
			/>
			<Article 
					image = "https://tinyurl.com/dexrertr"
					header="We now carry the mantle to spread his values of hardwork, caring and integrity."
					date="June 25, 2003"
					text={<div>
						I only worked as a intern with John for three months. But as I have told people many times, during my tutiledge under John I learned more than I have in any other period in my 6-year career.
					</div>}
			/>
			<Article 
					image = "https://tinyurl.com/dexrertr"
					header="Cowboys Lose Pioneer, Close Friend"
					date="December 22, 2002"
					text={<div>
						As a team, the Dallas Cowboys have experienced more losses this year than they would ever have hoped for: Eight. But this week, the Cowboys experienced their biggest loss of all, and it had nothing to do with a game or player. John Chang, the Cowboys' director of broadcasting for nearly nine seasons, passed away at noon Thursday at Parkland Hospital in Dallas after suffering a cerebral hemorrhage late Tuesday afternoon while working here at Valley Ranch.
					</div>}
			/>
			<Article 
					image = "https://tinyurl.com/dexrertr"
					header="The Friend You Never Knew"
					date="December 12, 2002"
					text={<div>
						His last words to me were: "We'll tape on Wednesday." That was Tuesday. John Chang never made it to Wednesday.
					</div>}
			/>
			<Footer />
		</Fragment>
	);
};

export default About;