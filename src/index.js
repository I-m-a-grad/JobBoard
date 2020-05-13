import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Provider } from "react-redux";
import store from "./redux";
import { HashRouter as Router } from 'react-router-dom'

ReactDOM.render(

  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("app"));
