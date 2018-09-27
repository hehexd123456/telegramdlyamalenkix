import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';

export class AnotherUserList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <ul className="anotheruserlist">
        {this.props.friends.map(f => (
          <li
            className='test'
            key={f.name}
            style={{
              width: '200px',
            }}
          >
            <span
              style={{
                cursor: 'pointer'
              }}
              onClick={() => this.props.handleClick(f.name)}
            >
              {f.name}
            </span>
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  friends: state.friends,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getUsers: () => dispatch(getUsers()),
  handleClick: ownProps.onClick,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnotherUserList)