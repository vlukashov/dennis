import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import "./Navigation.css";

import homeIcon from "../../assets/dennis-icon-default.svg";
import homeIconActive from "../../assets/dennis-icon-active.svg";
import knowledgeIcon from "../../assets/knowledge-icon-default.svg";
import knowledgeIconActive from "../../assets/knowledge-icon-default-active.svg";
import myHistoryIcon from "../../assets/myhistory-icon-default.svg";
import myHistoryIconActive from "../../assets/myhistory-icon-default-active.svg";
import bookAppointmentIcon from "../../assets/schedulevisit-icon-default.svg";
import bookAppointmentIconActive from "../../assets/schedulevisit-icon-active.svg";

import { Image } from "react-bootstrap";

class Navigation extends Component {
  render() {
    const NavigationLink = withRouter(props => {
      const activeIcon = props.activeIcon || props.icon;
      const icon =
        props.location.pathname === props.to ? activeIcon : props.icon;
      return (
        <NavLink exact={props.exact} to={props.to} activeClassName="active">
          <Image className="Navigation-icon" src={icon} />
          <span className="Navigation-label">{props.label}</span>
        </NavLink>
      );
    });

    return (
      <nav className="Navigation">
        <NavigationLink
          exact
          to="/"
          icon={homeIcon}
          activeIcon={homeIconActive}
          label="Home"
        />
        <NavigationLink
          to="/my-history"
          icon={myHistoryIcon}
          activeIcon={myHistoryIconActive}
          label="My History"
        />
        <NavigationLink
          to="/knowledge"
          icon={knowledgeIcon}
          activeIcon={knowledgeIconActive}
          label="Knowledge"
        />
        <NavigationLink
          to="/book-appointment"
          icon={bookAppointmentIcon}
          activeIcon={bookAppointmentIconActive}
          label="Schedule visit"
        />
      </nav>
    );
  }
}

export default Navigation;
