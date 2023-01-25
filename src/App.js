import './style/App.css';
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
import Home from './routes/home.jsx';

function App() {
  return (
	<Router>
		<div>
		<Switch>
			<Route path="/" element={<Home />} />
		</Switch>
		</div>
	</Router>
  );
}

export default App;