export const usernames: string[] = ['Alice', 'Bob', 'Charlie'];
export const ratings: number[] = [4.5, 3.8, 5];

export interface Product {
  id: number;
  name: string;
  price: number;
}

export const products: Product[] = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
];

console.log(usernames, ratings, products);
