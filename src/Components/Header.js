import React from "react";

const Header = ({ cartCount }) => {
  return (
    <Header className="header">
      <div>
        <h1>My Store</h1>
        <div className="header-tag">
          <div className="">HomePage</div>
          <div className="">Categories</div>
          <div className="">Contact Us</div>
          <div className="">More Options</div>
          <div className="">
            <input
              type="search"
              className=""
              placeholder="What are You looking for ?"
            />
          </div>

          <div className="cart">
            🛒 Cart: <span>{cartCount}</span>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Header;
