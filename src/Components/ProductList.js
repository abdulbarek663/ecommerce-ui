import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
const ProductList = ({ products, setCartCount }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
      ))}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          setCartCount={setCartCount} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default ProductList;
