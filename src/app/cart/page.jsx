"use client";

import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();

  const { cart, increaseQty, decreaseQty, removeItem, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-20 text-xl text-gray-500 min-h-screen">
        🛒 Your cart is empty
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-6"
        >
          <div className="flex items-center gap-5">
            <div className="relative w-24 h-24">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-500">${item.price}</p>

              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>

                <span className="font-semibold">{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="font-bold text-lg">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => removeItem(item.id)}
              className="text-red-500 text-sm mt-2"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="text-right mt-10 border-t pt-6">
        <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>

        <button
          onClick={() => router.push("/checkout")}
          className="mt-4 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Checkout →
        </button>
      </div>
    </div>
  );
}
