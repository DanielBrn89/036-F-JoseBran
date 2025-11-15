import React, { useEffect, useState } from "react";
import type { Product } from "../api/productsApi";
import { getCocktailDetails } from "../api/productsApi";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [details, setDetails] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!product) return;

    setLoading(true);

    getCocktailDetails(product.id)
      .then((extra) => {
        setDetails({ ...product, ...extra });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [product]);

  if (!product) return null;

  const data = details ?? product;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content modal-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">{data.name}</h2>

        <img src={data.imageUrl} alt={data.name} className="modal-image" />

        {loading ? (
          <p className="modal-text">Cargando detalles...</p>
        ) : (
          <>
            <p className="modal-text">
              <strong>Categoría:</strong> {data.category}
            </p>

            <p className="modal-text">
              <strong>Vaso:</strong> {data.glass}
            </p>

            <p className="modal-text">
              <strong>Instrucciones:</strong>
            </p>

            <p className="modal-text">{data.instructions}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductModal;

