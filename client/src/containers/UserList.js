import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import { connect } from 'react-redux';
import { socket } from '../constants';

export class UserList extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    socket.on('join', (user) => {
      this.setState({
        users: this.state.users.concat(user),
      })
    });

    socket.on('leave', (user) => {
      this.setState({
        users: this.state.users.filter(u => user !== u),
      })
    });
  }

  render() {
    return(
      <ul className="userlist">
        {this.state.users.map(u => (
          <li
            key={u}
          >
            {u}
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(
  mapStateToProps,
)(UserList)