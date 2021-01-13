import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import Root from './Root';
import store from './redux/redux-store';


ReactDOM.render(
  <BrowserRouter>
    <Provider store = { store }>
      <Root />
    </Provider>
    </BrowserRouter>, 
  document.getElementById('root')
);

