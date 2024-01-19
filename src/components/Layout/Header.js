import React, { Fragment } from "react";
import "./Header.css";
import HeaderCartIcon from "./HeaderCartIcon";
import "./HeaderCartButton.css";
import HeaderNav from "./HeaderNav";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <HeaderNav />
        <HeaderCartIcon onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
