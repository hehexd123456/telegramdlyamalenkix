import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MainContent from './MainContent';

const Root = ({ 
  store, 
}) => (
  <Provider store={store} >
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  </Provider>
)

export default Root;