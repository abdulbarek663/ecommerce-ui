import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ProductModal = ({ product, setCartCount, onClose }) => {
  return (
    <Modal isOpen={!!product} onRequestClose={onClose} className="modal">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <button onClick={() => setCartCount((count) => count + 1)}>Add to Cart</button>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ProductModal;
