import React, { Component } from "react";
import { Image, Panel } from "react-bootstrap";
import "./ChatMessage.css";

import dennisIcon from "../../assets/dennis-logo.svg";

class ChatMessage extends Component {
  render() {
    return (
      <div className={`ChatMessage ${this.props.className}`}>
        <div className="ChatMessage-avatar">
          <Image src={dennisIcon} />
        </div>
        <Panel>{this.props.children}</Panel>
      </div>
    );
  }
}

export default ChatMessage;
