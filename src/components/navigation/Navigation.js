import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';
import logo from './logo.svg';

import { Image } from 'react-bootstrap';

class NavigationLink extends Component {
    render() {
        return (
            <NavLink exact={this.props.exact}
                     to={this.props.to}
                     activeStyle={{color: '#56E676'}}>
                <Image className="Navigation-icon" src={this.props.icon}/>
                <span className="Navigation-label">{this.props.label}</span>
            </NavLink>
        );
      }
}

class Navigation extends Component {
    render() {
        return (
            <nav className="Navigation">
                <NavigationLink exact to="/" icon={logo} label="Home" />
                <NavigationLink to="/my-history" icon={logo} label="My History" />
                <NavigationLink to="/book-appointment" icon={logo} label="Appointment" />
                <NavigationLink to="/find-clinic" icon={logo} label="Find Clinic" />
            </nav>
        );
    }
}
  
export default Navigation;
