"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var React = require("react");
var react_1 = require("react");
function App() {
    var _this = this;
    var _a = React.useState({ bids: [], asks: [] }), orderBook = _a[0], setOrderBook = _a[1];
    var _b = React.useState({ price: '', quantity: '', side: '' }), newOrder = _b[0], setNewOrder = _b[1];
    var _c = React.useState(''), error = _c[0], setError = _c[1];
    (0, react_1.useEffect)(function () {
        fetchOrderBook();
    }, []);
    var fetchOrderBook = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get('http://localhost:8000/order-book')];
                case 1:
                    response = _a.sent();
                    setOrderBook(response.data);
                    setError('');
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    setError('Error fetching order book');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var addOrder = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.post('http://localhost:8000/order-book', newOrder)];
                case 2:
                    _a.sent();
                    setNewOrder({ price: '', quantity: '', side: '' });
                    fetchOrderBook();
                    setError('');
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    setError('Error adding order');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var cancelOrder = function (orderId) { return __awaiter(_this, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.delete("http://localhost:8000/order-book/".concat(orderId))];
                case 1:
                    _a.sent();
                    fetchOrderBook();
                    setError('');
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    setError('Error canceling order');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleInputChange = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        setNewOrder(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[name] = value, _a)));
        });
    };
    return (React.createElement("div", { className: "App" },
        React.createElement("h1", null, "Order Book"),
        error && React.createElement("div", { className: "error" }, error),
        React.createElement("div", null,
            React.createElement("h2", null, "Bid Orders"),
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Order ID"),
                        React.createElement("th", null, "Price"),
                        React.createElement("th", null, "Quantity"),
                        React.createElement("th", null, "Actions"))),
                React.createElement("tbody", null, orderBook.bids.map(function (order) { return (React.createElement("tr", { key: order.id },
                    React.createElement("td", null, order.id),
                    React.createElement("td", null, order.price),
                    React.createElement("td", null, order.quantity),
                    React.createElement("td", null,
                        React.createElement("button", { onClick: function () { return cancelOrder(order.id); } }, "Cancel")))); })))),
        React.createElement("div", null,
            React.createElement("h2", null, "Ask Orders"),
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Order ID"),
                        React.createElement("th", null, "Price"),
                        React.createElement("th", null, "Quantity"),
                        React.createElement("th", null, "Actions"))),
                React.createElement("tbody", null, orderBook.asks.map(function (order) { return (React.createElement("tr", { key: order.id },
                    React.createElement("td", null, order.id),
                    React.createElement("td", null, order.price),
                    React.createElement("td", null, order.quantity),
                    React.createElement("td", null,
                        React.createElement("button", { onClick: function () { return cancelOrder(order.id); } }, "Cancel")))); })))),
        React.createElement("div", null,
            React.createElement("h2", null, "Add New Order"),
            React.createElement("form", { onSubmit: addOrder },
                React.createElement("label", null,
                    "Price:",
                    React.createElement("input", { type: "text", name: "price", value: newOrder.price, onChange: handleInputChange, required: true })),
                React.createElement("label", null,
                    "Quantity:",
                    React.createElement("input", { type: "text", name: "quantity", value: newOrder.quantity, onChange: handleInputChange, required: true })),
                React.createElement("label", null,
                    "Side:",
                    React.createElement("select", { name: "side", value: newOrder.side, onChange: handleInputChange, required: true },
                        React.createElement("option", { value: "" }, "Select"),
                        React.createElement("option", { value: "bid" }, "Bid"),
                        React.createElement("option", { value: "ask" }, "Ask"))),
                React.createElement("button", { type: "submit" }, "Add Order")))));
}
exports.default = App;
