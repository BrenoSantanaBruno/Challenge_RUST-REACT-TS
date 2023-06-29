"use strict";
// OrderBook.tsx
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderBook = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var orderSlice_1 = require("../features/orders/orderSlice");
var OrderBook = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var orders = (0, react_redux_1.useSelector)(function (state) { return state.orders; });
    React.useEffect(function () {
        dispatch((0, orderSlice_1.fetchOrders)());
    }, [dispatch]);
    var handleAddOrder = function (order) {
        dispatch((0, orderSlice_1.addOrder)(order));
    };
    // ...
    return (React.createElement("div", null,
        React.createElement("button", { onClick: function () { return handleAddOrder(someOrder); } }, "Add Order"),
        React.createElement("ul", null, orders.map(function (order) { return (React.createElement("li", { key: order.id },
            order.side,
            " - Price: ",
            order.price,
            " - Quantity: ",
            order.quantity)); }))));
};
exports.OrderBook = OrderBook;
