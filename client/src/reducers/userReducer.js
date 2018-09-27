const initialState = {
  user: localStorage.getItem('user'),
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: {
          ...action.payload,
        }
      };
    case 'LOGOUT': 
      return {
        ...state,
        user: null
      };
    default: 
      return state;
  }
}

export default userReducer;