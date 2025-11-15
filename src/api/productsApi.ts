// src/api/productsApi.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  category?: string;      // 🔹 nuevo
  glass?: string;         // 🔹 nuevo
  instructions?: string;  // 🔹 nuevo
}

// Lista básica de cócteles para las cards
export async function getProducts(): Promise<Product[]> {
  const response = await fetch(
    "https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  );

  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }

  const data = await response.json();

  return data.drinks.map((drink: any) => ({
    id: drink.idDrink,
    name: drink.strDrink,
    description: "Cóctel refrescante y delicioso 🍸",
    price: Math.floor(Math.random() * 50) + 10,
    stock: Math.floor(Math.random() * 20) + 1,
    imageUrl: drink.strDrinkThumb,
  }));
}

// 🔹 Detalles completos de un cóctel (categoría, vaso, instrucciones)
export async function getCocktailDetails(
  id: string
): Promise<Pick<Product, "category" | "glass" | "instructions">> {
  const response = await fetch(
    `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (!response.ok) {
    throw new Error("Error al obtener detalles del cóctel");
  }

  const data = await response.json();
  const drink = data.drinks?.[0];

  if (!drink) {
    throw new Error("Cóctel no encontrado");
  }

  return {
    category: drink.strCategory,
    glass: drink.strGlass,
    instructions: drink.strInstructions,
  };
}
