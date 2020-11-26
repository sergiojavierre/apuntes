import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Subjects from "./subjects/Subjects";

function App() {
  return (
    <Router>
      <div>
        <nav> 
              <Link to="/">sergiojavierre</Link>
              <div>
                <Link to="/users">GitHub</Link>
                <Link to="/users">Recomendaciones</Link>
              </div>
        </nav>
        <main>
          <Switch>
            <Route path="/about">
            </Route>
            <Route path="/users">
            </Route>
            <Route path="/">
              <Subjects></Subjects>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
