import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Panel, Image } from "react-bootstrap";
import "./Home.css";
import bookCtaImage from "../../assets/teeth-history.png";
import planmecaE10Image from "../../assets/toothbrush-image.png";

import PageLayout from "../../layouts/page/PageLayout";
import InPageSubheader from "../../components/in-page-subheader/InPageSubheader";
import ChatMessage from "../../components/chat-message/ChatMessage";

class Home extends Component {
  render() {
    const RecommendedProduct = withRouter(props => {
      return (
        <div className="RecommendedProduct">
          <div className="RecommendedProduct-card">
            <Image src={props.imgurl} />
            <div className="RecommendedProduct-content">
              <h4 className="RecommendedProduct-text-primary">{props.name}</h4>
              <p className="RecommendedProduct-text-secondary">
                {props.description}
              </p>
            </div>
          </div>
          <Button
            block
            onClick={() => {
              props.history.push(props.to);
            }}
          >
            Read more about the product
            <span className="RecommendedProduct-button-icon">&gt;</span>
          </Button>
        </div>
      );
    });
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
          subtitle="See my history"
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

        <RecommendedProduct
          imgurl={planmecaE10Image}
          name="Planmeca Electric Tooth Brush E10"
          description="Get your brushing to the next level with a high quality tooth bruch that connects with real-time data to your Dennis App"
          to="/"
        />

        {/* <InPageSubheader
          title="Dental Knowledge"
          subtitle="Go to Knowledge Base"
          to="/knowledge"
        /> */}
      </PageLayout>
    );
  }
}

export default Home;
