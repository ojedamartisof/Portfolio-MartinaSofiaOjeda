import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
// import { helmet } from 'react-helmet';


ReactDOM.render(
  <React.StrictMode>
    <helmet>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </helmet>
  </React.StrictMode>,
  document.getElementById('root')
);

