import React from 'react';
import Card from '../UI/Card';
import { useCart } from '../../store/CartContext';
import './ProductList.css';

const ProductList = ({ products, updateQuantity }) => {
  const { handleAddToCart } = useCart();

  return (
    <Card>
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product, index) => {
            return (
              <li key={index} className="product-item">
                <strong>{product.productName}</strong> - {product.productDescription} - ${product.price}
                <div className="button-container">
                  <button onClick={() => {
                      handleAddToCart(product, 'large');
                      updateQuantity(index, 'quantityLarge');
                    }}
                  >
                    Add to Cart (L)
                  </button>
                  <span>Stock: {product.quantityLarge}</span>
                  <button onClick={() => {
                      handleAddToCart(product, 'medium');
                      updateQuantity(index, 'quantityMedium');
                    }}
                  >
                    Add to Cart (M)
                  </button>
                  <span>Stock: {product.quantityMedium}</span>
                  <button onClick={() => {
                      handleAddToCart(product, 'small');
                      updateQuantity(index, 'quantitySmall');
                    }}
                  >
                    Add to Cart (S)
                  </button>
                  <span>Stock: {product.quantitySmall}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
};

export default ProductList;