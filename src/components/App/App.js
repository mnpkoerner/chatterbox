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
      <header className="App-header"></header>
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
