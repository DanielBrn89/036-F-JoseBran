import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

type PageItem = number | "dots";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const buildPages = (): PageItem[] => {
    const pages: PageItem[] = [];

    if (totalPages <= 5) {
      // Si son pocas, mostramos todas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // Siempre mostramos la primera y la última
    pages.push(1);

    let left = currentPage - 1;
    let right = currentPage + 1;

    if (currentPage <= 2) {
      left = 2;
      right = 3;
    } else if (currentPage >= totalPages - 1) {
      left = totalPages - 2;
      right = totalPages - 1;
    }

    if (left > 2) {
      pages.push("dots");
    }

    for (let i = left; i <= right; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    if (right < totalPages - 1) {
      pages.push("dots");
    }

    pages.push(totalPages);

    return pages;
  };

  const pageItems = buildPages();

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ⟨ Anterior
      </button>

      {pageItems.map((item, index) =>
        item === "dots" ? (
          <span key={`dots-${index}`} className="pagination-dots">
            ...
          </span>
        ) : (
          <button
            key={item}
            className={item === currentPage ? "active" : ""}
            onClick={() => onPageChange(item)}
          >
            {item}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente ⟩
      </button>
    </div>
  );
};

export default Pagination;
