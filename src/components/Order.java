/ Example in BidOrder.tsx

interface Order {
  id: string;
  price: number;
  quantity: number;
  side: 'bid' | 'ask';
}

interface BidOrderProps {
  addOrder: (order: Order) => void;
}

const BidOrder: React.FC<BidOrderProps> = ({ addOrder }) => {
  // component logic here...
}