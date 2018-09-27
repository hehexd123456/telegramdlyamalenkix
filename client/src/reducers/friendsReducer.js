const friendsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS_SUCCESS':
      return [
        ...state,
        ...action.payload.data
      ]
    default: 
      return state;
  }
}

export default friendsReducer