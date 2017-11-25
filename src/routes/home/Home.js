import React, { Component } from 'react';
import './Home.css';

import Header from '../../components/header/Header';

class Home extends Component {
    render() {
      return (
        <div>
          <Header title="Home" />
          <p className="Home-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
    }
}
  
export default Home;