import axios from 'axios';
import * as React from 'react';
import {useEffect} from 'react';

interface Order {
    id: number;
    price: number;
    quantity: number;
    side: string;
}

interface OrderBook {
    bids: Order[];
    asks: Order[];
}

interface NewOrder {
    price: string;
    quantity: string;
    side: string;
}

function App() {
    const [orderBook, setOrderBook] = React.useState<OrderBook>({bids: [], asks: []});
    const [newOrder, setNewOrder] = React.useState<NewOrder>({price: '', quantity: '', side: ''});
    const [error, setError] = React.useState('');

    useEffect(() => {
        fetchOrderBook();
    }, []);

    const fetchOrderBook = async () => {
        try {
            const response = await axios.get<OrderBook>('http://localhost:8000/order-book');
            setOrderBook(response.data);
            setError('');
        } catch (error) {
            setError('Error fetching order book');
        }
    };

    const addOrder = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:8000/order-book', newOrder);
            setNewOrder({price: '', quantity: '', side: ''});
            fetchOrderBook();
            setError('');
        } catch (error) {
            setError('Error adding order');
        }
    };

    const cancelOrder = async (orderId: number) => {
        try {
            await axios.delete(`http://localhost:8000/order-book/${orderId}`);
            fetchOrderBook();
            setError('');
        } catch (error) {
            setError('Error canceling order');
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target;
        setNewOrder((prevState) => ({...prevState, [name]: value}));
    };

    return (
        <div className="App">
            <h1>Order Book</h1>

            {error && <div className="error">{error}</div>}

            <div>
                <h2>Bid Orders</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orderBook.bids.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.price}</td>
                            <td>{order.quantity}</td>
                            <td>
                                <button onClick={() => cancelOrder(order.id)}>Cancel</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div>
                <h2>Ask Orders</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orderBook.asks.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.price}</td>
                            <td>{order.quantity}</td>
                            <td>
                                <button onClick={() => cancelOrder(order.id)}>Cancel</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div>
                <h2>Add New Order</h2>
                <form onSubmit={addOrder}>
                    <label>
                        Price:
                        <input
                            type="text"
                            name="price"
                            value={newOrder.price}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Quantity:
                        <input
                            type="text"
                            name="quantity"
                            value={newOrder.quantity}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Side:
                        <select name="side" value={newOrder.side} onChange={handleInputChange} required>
                            <option value="">Select</option>
                            <option value="bid">Bid</option>
                            <option value="ask">Ask</option>
                        </select>
                    </label>
                    <button type="submit">Add Order</button>
                </form>
            </div>
        </div>
    );
}

export default App;
