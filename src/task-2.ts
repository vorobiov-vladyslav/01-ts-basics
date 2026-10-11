export interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
}

export const product: Product = {
  id: 1,
  name: 'Laptop',
  price: 1200,
  description: 'A portable computer',
};

console.log(product);
