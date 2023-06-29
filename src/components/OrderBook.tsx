import {addOrder, fetchOrders} from "../features/orders/orderSlice";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/store";

export const OrderBook: React.FC = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state: RootState) => state.orders);

    React.useEffect(() => {
        // @ts-ignore
        dispatch(fetchOrders());
    }, [dispatch]);

    const handleAddOrder = (order: { side: string; quantity: number; price: number; id: string }) => {
        // @ts-ignore
        dispatch(addOrder(order));
    };

    // you need to create a new order here with the structure your application expects.
    const newOrder = {
        id: 'unique_id', // Replace with actual id
        side: 'buy', // Replace with actual side
        price: 100, // Replace with actual price
        quantity: 2 // Replace with actual quantity
    };

    return (
        <div>
            <button onClick={() => {
                handleAddOrder(newOrder)
            }}>Add Order
            </button>
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
