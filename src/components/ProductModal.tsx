import React from "react";
import type { Product } from "../api/productsApi";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // para que el click dentro no cierre
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2>{product.name}</h2>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="modal-image"
        />

        <p className="modal-description">{product.description}</p>

        <p>
          <strong>Precio:</strong> Q{product.price.toFixed(2)}
        </p>
        <p>
          <strong>Stock:</strong> {product.stock}
        </p>
      </div>
    </div>
  );
};

export default ProductModal;
