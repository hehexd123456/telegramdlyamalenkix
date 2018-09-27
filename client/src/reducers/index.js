import { combineReducers } from 'redux';
import user from './userReducer';
import messages from './messageReducer';
import friends from './friendsReducer';

const rootReducer = combineReducers({
  user,
  messages,
  friends,
})

export default rootReducer;