import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'app/app';
import { Provider } from 'react-redux';
import { store } from 'core/store';
import { BrowserRouter } from 'react-router-dom';
import './base.scss';
import 'react-datepicker/dist/react-datepicker.css';
import ErrorBoundary from 'app/ErrorBoundary';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
