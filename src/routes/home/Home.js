import React, { Component } from 'react';
import './Home.css';

import Header from '../../components/header/Header';
import ChatMessage from '../../components/chat-message/ChatMessage';

class Home extends Component {
    render() {
      return (
        <div>
          <Header title="Home" />
          <ChatMessage>
            Welcome Tim! It’s time to start your journey on making your teeth shine like you were a Hollywood star!
          </ChatMessage>
        </div>
      );
    }
}
  
export default Home;