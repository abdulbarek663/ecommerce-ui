import React, { useEffect, useState } from "react";
import ProductList from "../Components/ProductList";
import axios from "axios";


const Home = ({ setCartCount }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));

    axios.get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching category products:", err));
  };

  return (
    <div className="home">
      <select onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <ProductList products={products} setCartCount={setCartCount} />
    </div>
  );
};

export default Home;
