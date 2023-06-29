"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./App.css");
var OrderBook_1 = require("./components/OrderBook");
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            React.createElement(OrderBook_1.OrderBook, null),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
exports.default = App;
