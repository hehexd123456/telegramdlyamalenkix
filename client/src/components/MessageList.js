import React, { Component } from 'react';
import MessageItem from './MessageItem';

class MessageList extends Component {
  render() { 
    return(
      <div>
        <ul>
          {this.props.messages.map(message => (
            <MessageItem
              key={message}
              text={message} 
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default MessageList;

