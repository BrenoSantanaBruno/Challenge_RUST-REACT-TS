"use strict";
// index.tsx
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("./app/store"); // Assuming you have a store.ts file in a app folder
var App_1 = require("./App"); // Assuming you have an App.tsx file
require("./index.css"); // Assuming you have some global styles
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(react_redux_1.Provider, { store: store_1.store },
        React.createElement(App_1["default"], null))), document.getElementById('root'));
