import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Panel, Image } from "react-bootstrap";
import "./Home.css";
import bookCtaImage from "../../assets/teeth-history.png";

import PageLayout from "../../layouts/page/PageLayout";
import InPageSubheader from "../../components/in-page-subheader/InPageSubheader";
import ChatMessage from "../../components/chat-message/ChatMessage";

class Home extends Component {
  render() {
    return (
      <PageLayout title="Home">
        <ChatMessage>
          Welcome Tim! It’s time to start your journey on making your teeth
          shine like you were a Hollywood star!
        </ChatMessage>
        <div className="Home-chat-replies">
          <Button>How do we do that?</Button>
          <Button>Who are you?</Button>
        </div>

        <InPageSubheader
          title="Your history"
          subtitle="See me history >"
          to="/my-history"
        />
        <Panel>
          <div className="Home-cta-panel">
            <Image src={bookCtaImage} />
            <div className="Home-cta-panel-body">
              <span>
                Schedule your first dental appointment to unlock the the history
                platform
              </span>
              <h3>
                Book an appointment
                <Link to="/book-appointment">&gt;</Link>
              </h3>
            </div>
          </div>
        </Panel>

        <InPageSubheader title="Recommended Products" />
        <ChatMessage>
          Here are some products that we recommend you to use to make sure your
          dental health is OK.
        </ChatMessage>
        <div className="Home-chat-replies">
          <Button>How should I care?</Button>
        </div>
      </PageLayout>
    );
  }
}

export default Home;
