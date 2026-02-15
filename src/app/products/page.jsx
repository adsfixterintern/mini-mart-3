import Image from "next/image";
import Link from "next/link";
import { products } from "../data";

export default function AllProducts() {
  return (
    <div className="max-w-7xl min-h-screen mx-auto px-4 py-10">
      <h1 className="text-4xl text-black font-bold text-center mb-10">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative w-full h-56 text-gray-700">
              <Image
                fill
                src={product.image}
                alt={product.name}
                className="object-cover"
              />
            </div>

            <div className="p-5 text-gray-700">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-2">Price: ${product.price}</p>

              <Link
                href={`/products/${product.id}`}
                className="imt-6 text-green-700 underline py-3 rounded-lg transition"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
