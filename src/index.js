import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { store, persistor } from './redux/store';
import GlobalStyle from './global-styles';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
        <GlobalStyle />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
