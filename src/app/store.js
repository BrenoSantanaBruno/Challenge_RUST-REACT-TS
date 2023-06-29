"use strict";
// store.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var orderSlice_1 = require("../features/orders/orderSlice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        orders: orderSlice_1.ordersSlice.reducer,
    },
});
