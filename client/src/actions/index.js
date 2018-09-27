import * as actionTypes from '../constants';

export const logout = () => ({
  type: 'LOGOUT',
})

export const addMessage = (msg) => ({
  type: 'ADD_MESSAGE',
  payload: {
    msg,
  }  
})

const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST
})

const loginSuccess = (data) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: {
    data,
  }
})

const loginFailure = (err) => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: {
    error: err || 'Something went wrong.',
  }
})

export const login = (data) => (dispatch) => {
  dispatch(loginRequest());

  return fetch('http://localhost:3001/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      ...data
    }),
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(res => res.json())
  .then(data => dispatch(loginSuccess(data)))
  .catch(err => console.log(err))
}

const signupRequest = () => ({
  type: actionTypes.LOGIN_REQUEST
})

const signupSuccess = ({ name }) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: {
    name,
  }
})

const signupFailure = (err) => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: {
    error: err || 'Something went wrong.',
  }
})

export const signup = (data) => (dispatch) => {
  dispatch(signupRequest());

  return fetch('http://localhost:3001/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({
      ...data
    }),
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}

const getUsersSuccess = (data) => ({
  type: 'GET_USERS_SUCCESS',
  payload: {
    data
  }
})

export const getUsers = () => (dispatch) => {
  return fetch('http://localhost:3001/api/users/all')
    .then(res => res.json())
    .then(data => dispatch(getUsersSuccess(data)))
    .catch(err => console.log(err))
}

