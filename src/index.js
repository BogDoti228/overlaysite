import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store/store";
import App from "./App";
import "./source/stylesheets/index.scss"
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  document.getElementById('root')
);
