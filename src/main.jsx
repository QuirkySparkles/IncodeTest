import React from "react";
import ReactDOM from "react-dom";
import thunkMiddleware from "redux-thunk";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { getPosts, setSearchParameter } from "./actions.js";
import mainReducer from "./reducers.js";
import "semantic-ui-css/semantic.min.css";

const store = createStore(
    mainReducer,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
	document.getElementById("app")
);