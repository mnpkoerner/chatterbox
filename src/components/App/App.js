import './App.css'
import {
  HashRouter as Router,
  Route,

} from 'react-router-dom';
import Home from '../Home/Home'
import Words from '../Words/Words'

function App() {
  return (
    <Router>

      <Route
        exact
        path="/">
        <Home />
      </Route>

      <Route
        exact
        path="/words">
        <Words />
      </Route>

    </Router>
  );
}

export default App;
