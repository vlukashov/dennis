import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Panel, Image } from 'react-bootstrap';
import './Home.css';
import bookCtaImage from '../../assets/teeth-history.png';

import Header from '../../components/header/Header';
import ChatMessage from '../../components/chat-message/ChatMessage';

class Home extends Component {
  render() {
    const SubSection = (props) => {
      return (
        <div className="Home-subheader">
          <h3 className="Home-subheader-title">{props.title}</h3>
          <Link to={props.to}>{props.subtitle}</Link>
        </div>
      );
    };

    return (
      <div className="Home">
        <Header title="Home" />
        <div className="Home-content">
          <ChatMessage>
            Welcome Tim! It’s time to start your journey on making your teeth shine like you were a Hollywood star!
          </ChatMessage>
          <div className="Home-chat-replies">
            <Button>How do we do that?</Button>
            <Button>Who are you?</Button>
          </div>
          <SubSection title="Your history" subtitle="See me history >" to="/my-history" />
          <Panel>
            <div className="Home-cta-panel">
              <Image src={bookCtaImage}></Image>
              <div className="Home-cta-panel-body">
                <span>Schedule your first dental appointment to unlock the the history platform</span>
                <h3>
                  Book an appointment
                  <Link to="/book-appointment">&gt;</Link>
                </h3>
              </div>
            </div>
            
          </Panel>
        </div>
      </div>
    );
  }
}
  
export default Home;