import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

export class LoginForm extends Component {
  state = {
    name: '',
    password: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state)
    this.setState({
      name: '',
      password: ''
    })
    this.props.history.push('/')
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div className="list">
        <form className="list">
          <label>
            Login
          </label>
          <input
            name="name"
            value={ this.state.name }
            onChange={ this.handleChange }
          />
          <label>
            Password
          </label>
          <input
            name="password"
            value={ this.state.password }
            onChange={ this.handleChange }
            type="password"
          />
          <button
            onClick={ this.handleSubmit }
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
})

export default connect(
  null,
  mapDispatchToProps,
)(LoginForm)