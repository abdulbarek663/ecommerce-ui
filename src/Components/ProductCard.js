import React from "react";

const ProductCard = ({ product, onSelect }) => {
  return (
    <div className="product-card" onClick={() => onSelect(product)}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
