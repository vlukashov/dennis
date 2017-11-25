import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./InPageSubheader.css";

class InPageSubheader extends Component {
  render() {
    const link = this.props.to ? (
      <Link to={this.props.to}>{this.props.subtitle}</Link>
    ) : null;
    return (
      <div className="InPageSubheader">
        <h3 className="InPageSubheader-title">{this.props.title}</h3>
        {link}
      </div>
    );
  }
}

export default InPageSubheader;
