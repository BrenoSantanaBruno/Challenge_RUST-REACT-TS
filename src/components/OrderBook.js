"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderBook = void 0;
var orderSlice_1 = require("../features/orders/orderSlice");
var React = require("react");
var react_redux_1 = require("react-redux");
var OrderBook = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var orders = (0, react_redux_1.useSelector)(function (state) { return state.orders; });
    React.useEffect(function () {
        // @ts-ignore
        dispatch((0, orderSlice_1.fetchOrders)());
    }, [dispatch]);
    var handleAddOrder = function (order) {
        // @ts-ignore
        dispatch((0, orderSlice_1.addOrder)(order));
    };
    // you need to create a new order here with the structure your application expects.
    var newOrder = {
        id: 'unique_id',
        side: 'buy',
        price: 100,
        quantity: 2 // Replace with actual quantity
    };
    return (React.createElement("div", null,
        React.createElement("button", { onClick: function () {
                handleAddOrder(newOrder);
            } }, "Add Order"),
        React.createElement("ul", null, orders.map(function (order) { return (React.createElement("li", { key: order.id },
            order.side,
            " - Price: ",
            order.price,
            " - Quantity: ",
            order.quantity)); }))));
};
exports.OrderBook = OrderBook;
