
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X, ShoppingCart } from "lucide-react";
// import { useCart } from "@/app/context/CartContext";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { cart } = useCart();

//   const cartCount = cart.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">

//           {/* Logo */}
//           <Link
//             href="/"
//             className="text-2xl font-bold text-gray-800"
//           >
//             <span className="text-green-600">Shop</span>Ease
//           </Link>

//           {/* Desktop + Tablet Menu */}
//           <div className="hidden md:flex items-center space-x-6 text-gray-700">

//             <Link href="/" className="hover:text-green-600 transition">
//               Home
//             </Link>

//             <Link href="/products" className="hover:text-green-600 transition">
//               Products
//             </Link>

           
//             {/* Search (hidden on small tablet) */}
//             <div className="hidden lg:block">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>

//             {/* Cart */}
//             <Link href="/cart" className="relative">
//               <ShoppingCart className="w-6 h-6 hover:text-green-600 transition" />

//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
//           </div>

//           {/* Mobile Button */}
//           <div className="md:hidden text-gray-700">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="focus:outline-none"
//             >
//               {isOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
//           isOpen ? "max-h-96 py-4" : "max-h-0"
//         }`}
//       >
//         <div className="flex flex-col px-6 space-y-4 text-gray-700">

//           <Link
//             href="/"
//             onClick={() => setIsOpen(false)}
//             className="hover:text-green-600"
//           >
//             Home
//           </Link>

//           <Link
//             href="/products"
//             onClick={() => setIsOpen(false)}
//             className="hover:text-green-600"
//           >
//             Products
//           </Link>

         

//           <Link
//             href="/cart"
//             onClick={() => setIsOpen(false)}
//             className="hover:text-green-600"
//           >
//             Cart ({cartCount})
//           </Link>

//           {/* Mobile Search */}
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//         </div>
//       </div>
//     </nav>
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const pathname = usePathname();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const linkClasses = (path) =>
    `transition ${
      isActive(path)
        ? "text-green-600 font-semibold"
        : "hover:text-green-600"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800"
          >
            <span className="text-green-600">Shop</span>Ease
          </Link>

          {/* Desktop + Tablet Menu */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700">

            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>

            <Link href="/products" className={linkClasses("/products")}>
              Products
            </Link>

            {/* Search */}
            <div className="hidden lg:block">
              <input
                type="text"
                placeholder="Search products..."
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Cart */}
            <Link href="/cart" className="relative">
              <ShoppingCart
                className={`w-6 h-6 transition ${
                  isActive("/cart")
                    ? "text-green-600"
                    : "hover:text-green-600"
                }`}
              />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden text-gray-700">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 space-y-4 text-gray-700">

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={linkClasses("/")}
          >
            Home
          </Link>

          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className={linkClasses("/products")}
          >
            Products
          </Link>

          <Link
            href="/cart"
            onClick={() => setIsOpen(false)}
            className={linkClasses("/cart")}
          >
            Cart ({cartCount})
          </Link>

          {/* Mobile Search */}
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </nav>
  );
}
