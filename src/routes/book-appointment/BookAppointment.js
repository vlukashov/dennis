import React, { Component } from "react";

import PageLayout from "../../layouts/page/PageLayout";
import ChatMessage from "../../components/chat-message/ChatMessage";
import InPageSubheader from "../../components/in-page-subheader/InPageSubheader";

import "./BookAppointment.css";

class BookAppointment extends Component {
  render() {
    return (
      <PageLayout title="Schedule a visit">
        <InPageSubheader title="Schedule a visit to the dentist" />
        <ChatMessage>
          I would recommend to take 3D scans of your teeth as often as possible
          to counter underlying problems. Best thing about them is that it only
          takes a few minutes and you get a proper wash as well! 🙌
        </ChatMessage>
      </PageLayout>
    );
  }
}

export default BookAppointment;
