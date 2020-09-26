import React from 'react';
import ReactDOM from 'react-dom';


import reducer, { initialState } from './components/reducer/reducer'
import { BrowserRouter } from 'react-router-dom'
import App from './App';

import './index.css';
import { StateProvider } from './components/State/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState = {initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);