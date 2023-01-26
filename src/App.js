import './style/App.css';
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';

import Home from './routes/home.js';

function App() {
  return (
	<Router>
		<div>
		<Switch>
			<Route path="/about" element={<Home />} />
			<Route path="/contactus" element={<Home />} />
			<Route path="/donate" element={<Home />} />
			<Route path="/howcanihelp" element={<Home />} />
			<Route path="/scholarships_grants" element={<Home />} />
			<Route path="/" element={<Home />} />
		</Switch>
		</div>
	</Router>
  );
}

export default App;