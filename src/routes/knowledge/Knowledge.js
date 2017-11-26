import React, { Component } from "react";
import { Panel, Image } from "react-bootstrap";

import PageLayout from "../../layouts/page/PageLayout";
import ChatMessage from "../../components/chat-message/ChatMessage";
import InPageSubheader from "../../components/in-page-subheader/InPageSubheader";

import actionImage from "../../assets/logo.svg";

import "./Knowledge.css";

class Knowledge extends Component {
  render() {
    const KBArticleCard = props => {
      return (
        <Panel
          style={{
            background: "linear-gradient(to bottom, #74ef9a 0%,#4eda6d 100%)"
          }}
          className="KBArticleCard"
        >
          {props.children}
        </Panel>
      );
    };

    const KBategoryCard = props => {
      return (
        <div className="KBategoryCard">
          <Image src={props.imgurl} />
          <div className="KBategoryCard-content">
            <h4>{props.title}</h4>
            <p>{props.subtitle}</p>
          </div>
        </div>
      );
    };

    return (
      <PageLayout title="Knowledge Base">
        <InPageSubheader
          title="Knowledge Base"
          className="Knowledge-subheader"
        />
        <ChatMessage className="Knowledge-chatMessage">
          This knowledge base will help you take better care of your teeth. It
          will offer personalized information connected to your previous dental
          visits. Dig in and become a dental expert!
        </ChatMessage>

        <InPageSubheader title="Articles that might interest you" />

        <KBArticleCard>Gum bleeds could be sign of infection</KBArticleCard>
        <KBArticleCard>How to take care of a chipped tooth</KBArticleCard>
        <KBArticleCard>
          Brushing your teeth only seldomly could lead to halitosis
        </KBArticleCard>

        <InPageSubheader title="All categories" />
        <KBategoryCard
          imgurl={actionImage}
          title="Brushing Teeth"
          subtitle="Why should you brush your teeth?"
        />
        <KBategoryCard
          imgurl={actionImage}
          title="Gums"
          subtitle="What are gums and why they exist?"
        />
      </PageLayout>
    );
  }
}

export default Knowledge;
