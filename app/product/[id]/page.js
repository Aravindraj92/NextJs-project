// app/product/[id]/page.js
import Image from "next/image";
import fetchProduct from "../../action";
import fetchProducts from "../../action";

export async function generateStaticParams() {
  const posts = await fetch("http://127.0.0.1:3000/api/products").then((res) =>
    res.json()
  );
  console.log(posts);
  return posts.map((post) => ({
    id: post._id.toString(),
  }));
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  try {
    const product = await fetchProduct(id);
    // console.log(product)
    if (!product) {
      return <div>Product not found</div>;
    }

    return (
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
        />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    );
  } catch (error) {
    return <div>Error fetching product details: {error.message}</div>;
  }
}
