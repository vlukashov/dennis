import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

import RouterLayout from './layouts/router/RouterLayout';
import MyHistory from './routes/my-history/MyHistory';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={RouterLayout}/>
            <Route path="/chat" component={MyHistory}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
