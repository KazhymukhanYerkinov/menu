import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom'

import Root from './Root';
import store from './redux/redux-store';


ReactDOM.render(
  // <HashRouter basename = {process.env.PUBLIC_URL}>
  <BrowserRouter>
    <Provider store = { store }>
      <Root />
    </Provider>
    </BrowserRouter>, 
  // </HashRouter>,
  document.getElementById('root')
);

