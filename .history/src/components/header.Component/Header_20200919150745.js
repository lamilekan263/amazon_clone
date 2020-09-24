import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="an imag of amazon logo"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineOne">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineOne">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineOne">Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
