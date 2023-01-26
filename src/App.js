import './style/App.css';
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';

import About from './routes/about.js';
import Contact from './routes/contact.js';
import Help from './routes/help.js';
import Home from './routes/home.js';
import Privacy from './routes/privacy.js';
import Scholarships from './routes/scholarships.js';

function App() {
  return (
	<Router>
		<div>
		<Switch>
			<Route path="/about" element={<About />} />
			<Route path="/contactus" element={<Contact />} />
			<Route path="/howcanihelp" element={<Help />} />
			<Route path="/privacy" element={<Privacy />} />
			<Route path="/scholarships_grants" element={<Scholarships />} />
			<Route path="/" element={<Home />} />
		</Switch>
		</div>
	</Router>
  );
}

export default App;