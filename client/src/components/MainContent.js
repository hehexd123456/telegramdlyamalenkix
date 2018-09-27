import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from '../containers/LoginForm';
import SignupForm from '../containers/SignupForm';
import Chat from '../containers/Chat';

const MainContent = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Chat} />
      <Route path='/login' component={LoginForm} />
      <Route exact path='/signup' component={SignupForm} />
    </Switch>
  </div>
)

export default MainContent;