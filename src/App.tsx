import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import Pagination from "./components/Pagination";
import AboutStack from "./components/AboutStack";
import WelcomeScreen from "./components/WelcomeScreen";
import { getProducts } from "./api/productsApi";
import type { Product } from "./api/productsApi";

const PAGE_SIZE = 12; // 🔹 AHORA MÁS CARDS POR PÁGINA

const App: React.FC = () => {
  const [section, setSection] = useState<"inicio" | "stack">("inicio");
  const [showWelcome, setShowWelcome] = useState<boolean>(true); // 🔹 NUEVO
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
    const endIndex = startIndex + PAGE_SIZE;
    return products.slice(startIndex, endIndex);
  }, [products, currentPage]);

  const handleInfoClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  
  const handleNavigate = (target: "welcome" | "inicio" | "stack") => {
  if (target === "welcome") {
    setShowWelcome(true);
    return;
  }

  // Si navega a cualquier otra sección, quitamos la pantalla de bienvenida
  setShowWelcome(false);
  setSection(target);
};


  return (
    <div className="app">
      <Navbar onNavigate={handleNavigate} />

      <main className="main-content">
        {showWelcome ? (
          <WelcomeScreen onEnter={() => setShowWelcome(false)} />
        ) : (
          <>
            {section === "inicio" && (
              <>
                <h1 className="page-title">Listado de Productos</h1>

                <div className="product-grid">
                  {currentProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onInfoClick={handleInfoClick}
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
                  onClose={handleCloseModal}
                />
              </>
            )}

            {section === "stack" && <AboutStack />}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
