// OrderBook.tsx

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addOrder, fetchOrders} from '../features/orders/orderSlice';
// @ts-ignore
import {RootState} from "./src/app/store";
import {Order} from "../types/order";

export const OrderBook: React.FC = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state: RootState) => state.orders);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    const handleAddOrder = (order: Order) => {
        dispatch(addOrder(order));
    };

    // ...

    return (
        <div>
            <button onClick={() => handleAddOrder(someOrder)}>Add Order</button>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        {order.side} - Price: {order.price} - Quantity: {order.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};
