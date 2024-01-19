import React from 'react';
import Card from '../UI/Card';
import { useCart } from '../../store/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart } = useCart();

  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Card>
      <h2>Order Details</h2>
      <div className="cart-columns">
        <span className="cart-column">Name</span>
        <span className="cart-column">Size</span>
        <span className="cart-column">Quantity</span>
        <span className="cart-column">Price</span>
      </div>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <span className="cart-column">{item.productName}</span>
            <span className="cart-column">{item.size}</span>
            <span className="cart-column">{item.quantity}</span>
            <span className="cart-column">${calculateItemTotal(item)}</span>
          </li>
        ))}
      </ul>
      <div className="total">
        <span>Total:</span>
        <span className="total-quantity">{calculateTotalQuantity()}</span>
        <span className="total-price">${calculateTotal()}</span>
      </div>
      <div className="cart-buttons">
        <button>Order</button>
        <button>Cancel</button>
      </div>
    </Card>
  );
};

export default Cart;