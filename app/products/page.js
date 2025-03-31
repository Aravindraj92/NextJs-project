// app/products/page.js

import { fetchProducts } from "../action"; // Your server-side function to fetch data
import { ProductsList } from "./ProductList";
// export async function generateStaticParams() {
//   "use cache";
//   const posts = await fetchProducts();
//   console.log(posts);
//   return posts.map((post) => ({
//     id: post.id,
//   }));
// }
export default async function ProductsPage() {
  const products = await fetchProducts(); // Fetch the products server-side

  return (
    <div>
      <h1 className="text-center m-15">Our Products</h1>
      <ProductsList products={products} />
    </div>
  );
}
