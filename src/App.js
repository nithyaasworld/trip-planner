import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TripsPage from './TripsPage';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="app-container" >
        <Router>
          <div>
            <Switch>
              <Route path="/trips-list">
                <TripsPage />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  )
}
export default App;