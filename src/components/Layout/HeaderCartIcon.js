import React from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import { useCart } from "../../store/CartContext";

const HeaderCartIcon = (props) => {
  const { getCartSize } = useCart();
  return (
    <button className="button bump" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span> My Cart</span>
      <span className="badge">{getCartSize()}</span>
    </button>
  );
};

export default HeaderCartIcon;
