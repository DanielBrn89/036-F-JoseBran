import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import Pagination from "./components/Pagination";
import AboutStack from "./components/AboutStack";
import { getProducts, type Product } from "./api/productsApi";
import FadeWrapper from "./components/FadeWrapper";

const PAGE_SIZE = 15;

const App: React.FC = () => {
  const [section, setSection] = useState<"inicio" | "stack">("inicio");
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, []);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return products.slice(startIndex, startIndex + PAGE_SIZE);
  }, [products, currentPage]);

  const handleNavigate = (target: "inicio" | "stack") => {
    setSection(target);
  };

  return (
    <div className="app">
      <Navbar onNavigate={handleNavigate} />

      <main className="main-content">
        <FadeWrapper>
          {section === "inicio" && (

            <>
             <h1 className="page-title">UMG</h1>
              <h1 className="page-title">EXAMEN FINAL</h1>

              <div className="product-grid">
                {currentProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onInfoClick={setSelectedProduct}
                  />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />

              <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
              />
            </>
          )}

          {section === "stack" && <AboutStack />}
        </FadeWrapper>
      </main>
    </div>
  );
};

export default App;
