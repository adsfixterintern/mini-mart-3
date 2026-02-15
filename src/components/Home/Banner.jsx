"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="w-full  pt-8">
      <div className="relative max-w-7xl mx-auto  bg-[#DDE9E2] overflow-hidden">
        <div className="grid lg:grid-cols-2 items-center gap-8 px-6 md:px-12 py-12 lg:py-10">
          {/* LEFT CONTENT */}
          <div className="z-10">
            <span className="inline-block bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Opening Sale Discount 50%
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              SuperMarket Daily <br />
              Fresh Grocery
            </h1>

            <p className="mt-4 text-gray-600 max-w-md">
              Introduced a new model for online shopping and convenient home
              delivery.
            </p>

            <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-black transition">
              Shop Now →
            </button>
          </div>

          {/* RIGHT IMAGE SECTION */}

          <div className="relative flex justify-center lg:justify-end">
            {/* Circle Wrapper (Main Reference) */}
            
            <div className="relative translate-y-8 md:translate-y-10 lg:translate-y-12 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-green-700 rounded-full flex items-center justify-center">

              {/* Girl Image (Now Fixed Inside Circle) */}
              <Image
                src="/Images/Grocery-2.png"
                alt="Fresh Grocery"
                fill
                className="object-contain pt-6 scale-180 -translate-x-40 "
                priority
              />

              {/* Floating Card 1 */}

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden md:block absolute -top-6 right-0 bg-white p-3 rounded-xl shadow-md"
              >
                <p className="text-sm font-semibold text-black">Kiwi - 4 pcs</p>
                <p className="text-xs text-gray-500">4.8 <span className="text-yellow-600">★</span></p>
              </motion.div>

              {/* Floating Card 2 */}
             
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden md:flex items-center gap-2 absolute bottom-20 -left-20 bg-white px-3 py-2 rounded-xl shadow-md"
              >
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <p className="text-xs text-black font-medium">Delivery Done</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
