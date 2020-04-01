import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Carls Website</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <h2>About</h2>/>
            </Route>
            <Route path="/users">
              <h2>Users</h2>/>
            </Route>
            <Route path="/">
              <h2>Home</h2>/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
