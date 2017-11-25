import React, { Component } from "react";

import Header from "../../components/header/Header";
import ChatMessage from "../../components/chat-message/ChatMessage";

import "./BookAppointment.css";

class BookAppointment extends Component {
  render() {
    return (
      <div className="BookAppointment">
        <Header title="Schedule a visit" />
        <div className="BookAppointment-content">
          <ChatMessage>
            I would recommend to take 3D scans of your teeth as often as
            possible to counter underlying problems. Best thing about them is
            that it only takes a few minutes and you get a proper wash as well!
            :raised_hands:
          </ChatMessage>
        </div>
      </div>
    );
  }
}

export default BookAppointment;
