import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import "./InventoryForm.css";

const InventoryForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantityLarge, setQuantityLarge] = useState(0);
  const [quantityMedium, setQuantityMedium] = useState(0);
  const [quantitySmall, setQuantitySmall] = useState(0);
  const [errorMessage, setErrorMessage] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setErrorMessage("");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [errorMessage]);

  const handleAddProduct = () => {
    if (
      productName === "" ||
      productDescription === "" ||
      price === "" ||
      quantityLarge < 0 ||
      quantityMedium < 0 ||
      quantitySmall < 0
    ) {
      setErrorMessage("Quantities cannot be negative");
      return;
    }

    setErrorMessage("");
    
    const productData = {
      productName,
      productDescription,
      price,
      quantityLarge,
      quantityMedium,
      quantitySmall,
    };

    const existingInventory =
      JSON.parse(localStorage.getItem("inventory")) || [];
    const newInventory = [...existingInventory, productData];
    localStorage.setItem("inventory", JSON.stringify(newInventory));

    onAddProduct(productData);

    setProductName("");
    setProductDescription("");
    setPrice("");
    setQuantityLarge(0);
    setQuantityMedium(0);
    setQuantitySmall(0);
  };

  return (
    <Card>
      <h2>Add Product to Inventory</h2>
      <div className="error-message">{errorMessage}</div>
      <div className="inventory-form">
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Product Description</label>
          <input
            type="text"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>L</label>
          <div className="input-container">
            <input
              type="number"
              className="small-input"
              value={quantityLarge}
              onChange={(e) => setQuantityLarge(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>M</label>
          <div className="input-container">
            <input
              type="number"
              className="small-input"
              value={quantityMedium}
              onChange={(e) => setQuantityMedium(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>S</label>
          <div className="input-container">
            <input
              type="number"
              className="small-input"
              value={quantitySmall}
              onChange={(e) => setQuantitySmall(e.target.value)}
            />
          </div>
        </div>
        <div className="button-container">
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
      </div>
    </Card>
  );
};

export default InventoryForm;
