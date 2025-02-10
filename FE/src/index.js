<<<<<<< HEAD:FE/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";

import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
>>>>>>> 50aaeb73b537a7627bc4614f239109d8edfe0c7b:src/index.js
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
