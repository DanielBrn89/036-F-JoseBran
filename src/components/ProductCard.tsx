import React from "react";
import type { Product } from "../api/productsApi";

interface ProductCardProps {
  product: Product;
  onInfoClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onInfoClick }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />

      <h3 className="product-title">{product.name}</h3>


      <button onClick={() => onInfoClick(product)} className="info-button">
        Ver Detalle
      </button>
    </div>
  );
};

export default ProductCard;
