import React, { useState, useEffect } from "react";
import Header from "./components/Layout/Header";
import InventoryForm from "./components/Layout/InventoryForm";
import ProductList from "./components/Product/ProductList";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./store/CartContext";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const existingInventory =
      JSON.parse(localStorage.getItem("inventory")) || [];
    setProducts(existingInventory);
  }, []);

  const handleAddProduct = (product) => {
    const newProducts = [...products, product];
    localStorage.setItem("inventory", JSON.stringify(newProducts));
    setProducts(newProducts);
  };

  const updateQuantity = (index, size) => {
    let qnt = +products[index][size];
    let updatedProduct = { ...products[index], [size]: qnt - 1 };
    products[index] = updatedProduct;
    setProducts(products);
  };

  return (
    <CartProvider>
      <div>
        <Header />
        <InventoryForm onAddProduct={handleAddProduct} />
        <ProductList products={products} updateQuantity={updateQuantity} />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
