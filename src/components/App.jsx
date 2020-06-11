import React from 'react';
import Upload from './Upload';
import Stats from './Stats'
import About from './About';
import Video from './Video';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return(
    <Router>
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/upload" exact>
          <Upload />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/stats" exact>
          <Stats />
        </Route>
        <Route path="/video/:id">
          <Video />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;

/*
*/