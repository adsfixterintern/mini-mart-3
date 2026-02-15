// "use client";

// import Image from "next/image";
// import { useCart } from "@/app/context/CartContext";

// export default function ProductDetailsClient({ product }) {
//   const { addToCart } = useCart();

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 min-h-screen">
      
//       <div className="relative w-full h-125">
//         <Image
//           src={product.image}
//           alt={product.name}
//           fill
//           className="object-cover rounded-xl"
//         />
//       </div>

//       <div>
//         <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//         <p className="text-gray-700 text-xl font-semibold mb-4">Category: {product.category}</p>
//         <p className="text-xl font-semibold mb-4">Price: ${product.price}</p>
//         <p className="mb-6 text-gray-700">{product.description}</p>

//         <button
//           onClick={() => addToCart(product)}
//           className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
//         >
//           Add to Cart →
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

export default function ProductDetailsClient({ product }) {
  const { addToCart } = useCart();
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowMessage(true);

    // 2 second por message hide hobe
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 min-h-screen relative">
      
      {/* Success Message */}
      {showMessage && (
        <div className="absolute top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          ✅ Added to cart successfully!
        </div>
      )}

      <div className="relative w-full h-125">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 text-xl font-semibold mb-4">
          Category: {product.category}
        </p>
        <p className="text-xl font-semibold mb-4">
          Price: ${product.price}
        </p>
        <p className="mb-6 text-gray-700">{product.description}</p>

        <button
          onClick={handleAddToCart}
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
        >
          Add to Cart →
        </button>
      </div>
    </div>
  );
}
