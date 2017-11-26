import React, { Component } from "react";
import { Panel, Image } from "react-bootstrap";

import PageLayout from "../../layouts/page/PageLayout";
import ChatMessage from "../../components/chat-message/ChatMessage";
import InPageSubheader from "../../components/in-page-subheader/InPageSubheader";

import checkupImage from "../../assets/3d-icon.svg";
import regularImage from "../../assets/teeth-icon.svg";
import urgentImage from "../../assets/exclamation-icon.svg";

import "./BookAppointment.css";

class BookAppointment extends Component {
  render() {
    const ActionPanel = props => {
      return (
        <Panel
          className={`ActionPanel ${props.className}`}
          style={{ background: props.background }}
        >
          <div className="ActionPanel-body">
            <div className="ActionPanel-icon-wrapper">
              <Image src={props.imgurl} />
            </div>
            <div className="ActionPanel-content">{props.children}</div>
          </div>
        </Panel>
      );
    };

    return (
      <PageLayout title="Schedule a visit">
        <InPageSubheader
          title="Schedule a visit to the dentist"
          className="BookAppointment-subheader"
        />
        <ChatMessage className="BookAppointment-chatMessage">
          I would recommend to take 3D scans of your teeth as often as possible
          to counter underlying problems. Best thing about them is that it only
          takes a few minutes and you get a proper wash as well! 🙌
        </ChatMessage>

        <ActionPanel
          background="linear-gradient(to bottom, #74ef9a 0%,#4eda6d 100%)"
          imgurl={checkupImage}
          className="BookAppointment-actionPanel"
        >
          I want a 3D scan checkup at the closest clinic.
        </ActionPanel>
        <ActionPanel
          background="linear-gradient(to bottom, #74D7EF 0%,#36C3F8 100%)"
          imgurl={regularImage}
          className="BookAppointment-actionPanel"
        >
          I want an full treatment with a professional dentist.
        </ActionPanel>
        <ActionPanel
          background="linear-gradient(to bottom, #F6B26C 0%,#FD9B37 100%)"
          imgurl={urgentImage}
          className="BookAppointment-actionPanel"
        >
          I have a tooth ache and need treatment ASAP.
        </ActionPanel>
      </PageLayout>
    );
  }
}

export default BookAppointment;
