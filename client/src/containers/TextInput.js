import React, { Component } from 'react';
import { connect } from 'react-redux';
import { socket } from '../constants';

export class TextInput extends Component {
  state = {
    text: '',
  }

  handleKeyDown = (e) => {
    if (e.which === 13) {
      const text = this.state.text.trim();
      this.onSend(text);
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  onSend = (text) => {
    if (!text) return;
    console.log(this.props.room);
    socket.emit('send message', { room: this.props.room, text });
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div>
        <input
          value={ this.state.text } 
          onChange={ this.handleChange }
          onKeyDown={ this.handleKeyDown }
          placeholder="Type here..."
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  send: () => console.log('Sent!')
})

export default connect(
  null,
  mapDispatchToProps
)(TextInput);