import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './ChatMessage.css';

import dennisIcon from '../../assets/dennis-logo.svg';

class ChatMessage extends Component {
    render() {
      return (
        <div className="ChatMessage">
            <div className="ChatMessage-avatar">
                <Image src={dennisIcon} />
            </div>
            <div className="ChatMessage-message">
                {this.props.children}
            </div>
        </div>
      );
    }
}
  
export default ChatMessage;