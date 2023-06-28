// types/order.ts

import {createAsyncThunk} from "@reduxjs/toolkit";

export interface Order {
    id: string;
    price: number;
    quantity: number;
    side: 'bid' | 'ask';
}

// types/order.ts

export interface OrderInput {
    price: number;
    quantity: number;
    side: 'bid' | 'ask';
}

export const addOrder = createAsyncThunk(
    'orders/addOrder',
    async (order: OrderInput) => {
        // ...
    }
);
