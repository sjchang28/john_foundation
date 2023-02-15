import 'formdata-polyfill';

import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';

import About from './routes/about.js';
import Contact from './routes/contact.js';
import WaysToGive from './routes/waystogive';
import Home from './routes/home.js';
import Privacy from './routes/privacy.js';
import Scholarships from './routes/scholarships.js';

function App() {
  return (
	<Router>
		<div>
		<Switch basename={"/"}>
			<Route path="/about" element={<About />} />
			<Route path="/contactus" element={<Contact />} />
			<Route path="/waystogive" element={<WaysToGive />} />
			<Route path="/privacy" element={<Privacy />} />
			<Route path="/scholarships_grants" element={<Scholarships />} />
			<Route path="/" element={<Home />} />
		</Switch>
		</div>
	</Router>
  );
}

export default App;