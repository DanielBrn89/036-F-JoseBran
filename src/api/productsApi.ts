export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  // agrega otros campos si la API los trae
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://dummyjson.com/products?limit=100");
  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }
  const data = await response.json();
  return data.products.map((p: any) => ({
    id: p.id,
    name: p.title,           // ajustamos al nombre real del campo
    description: p.description,
    price: p.price,
    stock: p.stock ?? 0,     // si la API lo provee
    imageUrl: p.images?.[0] ?? "", // primer imagen
  }));
}
