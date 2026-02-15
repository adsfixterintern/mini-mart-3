"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/data";

export default function ProductCards() {
  const firstSix = products.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl text-black font-bold text-center mb-10">
        Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {firstSix.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg  overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative w-full h-56 text-gray-700">
              <Image
                fill
                src={product.image || "/placeholder.jpg"}
                alt={product.name}
                className="object-cover"
              />
            </div>

            <div className="p-5 text-gray-700">
              <h3 className="text-[18px] font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-6 font-semibold">Price: <span className="text-yellow-700">$</span>{product.price}</p>

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

      <div className="text-center mt-10">
        <Link
          href="/products"
          className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-black transition"
        >
          See All Products →
        </Link>
      </div>
    </div>
  );
}
