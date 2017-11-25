import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';

import Header from '../../components/header/Header';
import ChatMessage from '../../components/chat-message/ChatMessage';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header title="Home" />
        <ChatMessage>
          Welcome Tim! It’s time to start your journey on making your teeth shine like you were a Hollywood star!
        </ChatMessage>
        <div className="Home-chat-replies">
          <Button>How do we do that?</Button>
          <Button>Who are you?</Button>
        </div>
      </div>
    );
  }
}
  
export default Home;