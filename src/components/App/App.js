import './App.css'
import {
  HashRouter as Router,
  Route,

} from 'react-router-dom';
import Words from '../Words/Words'

function App() {
  return (
    <Router>
    <div className="App">
      <h1>YOU HERE</h1>
      <Route
        exact
        path="/words">
        <Words />
      </Route>
    </div>
    </Router>
  );
}

export default App;
