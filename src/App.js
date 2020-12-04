import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Subjects from "./subjects/Subjects";
import Recomendations from "./recomendations/Recomendations";

function App() {
  return (
    <Router>
      <div>
        <nav> 
              <Link to="/">sergiojavierre</Link>
              <div>
                <a href="https://github.com/sergiojavierre">GitHub</a>
                <Link to="/recomendaciones">Recomendaciones</Link>
              </div>
        </nav>
        <main>
          <Switch>
            <Route path="/recomendaciones">
              <Recomendations /> 
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
