import React, { Component } from 'react';
import { connect } from 'react-redux';

import MessageList from '../components/MessageList';
import TextInput from './TextInput';
import { socket } from '../constants';
import { addMessage } from '../actions';

export class ChatWindow extends Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    socket.emit('room', this.props.room);

    socket.on('receive message', (text) => {
      this.setState({
        messages: this.state.messages.concat(text)
      })
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.room !== this.props.room) {
      this.setState({
        messages: []
      })
      socket.emit('leave', prevProps.room);
      socket.emit('room', this.props.room);
    }
  }

  render() {
    return (
      <div>
        <div style={{float: 'left', width: '200px'}}>
          <h2>
            {`chat with ${this.props.room}`}
          </h2>
          <MessageList messages={this.state.messages} />
          <TextInput room={this.props.room} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  messages: state.messages,
  room: ownProps.room,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addMessage: (text) => dispatch(addMessage(text)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);