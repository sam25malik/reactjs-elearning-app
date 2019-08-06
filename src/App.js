import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Home from './pages/home/home';


class App extends Component {

  render() {
    return (
    <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
        );
  }

}

export default App;
