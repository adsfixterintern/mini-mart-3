
import { products } from "../../data";
import ProductDetailsClient from "./ProductDetailsClient";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return <ProductDetailsClient product={product} />;
}
