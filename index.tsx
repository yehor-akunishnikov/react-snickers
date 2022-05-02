import React from 'react';
import { render } from 'react-dom';

import { App } from './app/app';

import './style.css';
import 'macro-css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
