// ordersSlice.ts

import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Order} from "../../types/order";

// Define the initial state.
const initialState: Order[] = [];

// Fetch orders asynchronously.
export const fetchOrders = createAsyncThunk(
    'orders/fetchOrders',
    async () => {
        const response = await fetch('http://localhost:8000/orders');
        const data = await response.json();
        return data as Order[];
    }
);

// Add order asynchronously.
export const addOrder = createAsyncThunk(
    'orders/addOrder',
    async (order: Order) => {
        const response = await fetch('http://localhost:8000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        });
        const data = await response.json();
        return data as Order;
    }
);

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        // Define any synchronous reducers here.
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.fulfilled, (state, action: PayloadAction<Order[]>) => {
            // Add the fetched orders to the state.
            return action.payload;
        });
        builder.addCase(addOrder.fulfilled, (state, action: PayloadAction<Order>) => {
            // Add the new order to the state.
            state.push(action.payload);
        });
    }
});
