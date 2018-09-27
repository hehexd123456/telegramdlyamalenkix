import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChatWindow from './ChatWindow';
import AnotherUserList from './AnotherUserList';
import { addMessage } from '../actions';

export class Chat extends Component {
  state = {
    chat: null,
    messages: []
  }

  handleClick = (value) => {
    this.setState({
      chat: value,
    })
  }

  renderChat() {
    if (this.state.chat) {
      console.log(this.state.chat)
      return (
        <ChatWindow room={this.state.chat} />
      )
    }

    return (
      <p style={{ float: 'left'}}>
        please choose chat
      </p>
    )
  }

  render() {
    return (
      <div>
        <AnotherUserList 
          onClick={ this.handleClick }
        />
        { this.renderChat() }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: (text) => dispatch(addMessage(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);