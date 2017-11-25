import React, { Component } from "react";

import Header from "../../components/header/Header";

import "./PageLayout.css";

class PageLayout extends Component {
  render() {
    return (
      <div className="PageLayout">
        <Header title={this.props.title} />
        <div className="PageLayout-content">{this.props.children}</div>
      </div>
    );
  }
}

export default PageLayout;
