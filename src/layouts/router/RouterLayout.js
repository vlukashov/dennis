import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './RouterLayout.css';

import Navigation from '../../components/navigation/Navigation';

import Home from '../../routes/home/Home';
import MyHistory from '../../routes/my-history/MyHistory';
import BookAppointment from '../../routes/book-appointment/BookAppointment';
import FindClinic from '../../routes/find-clinic/FindClinic';

class RouterLayout extends Component {
  render() {
    return (
        <div className="RouterLayout">
            <header className="RouterLayout-nav">
                <Navigation />
            </header>
            
            <main className="RouterLayout-content">
                <Route exact path="/" component={Home}/>
                <Route path="/my-history" component={MyHistory}/>
                <Route path="/book-appointment" component={BookAppointment}/>
                <Route path="/find-clinic" component={FindClinic}/>
            </main>
        </div>
    );
  }
}

export default RouterLayout;
