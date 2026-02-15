import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#EBF0EF] text-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4"><span className="text-green-700">Shop</span>Ease</h2>
          <p className="text-sm">
            Your one-stop shop for quality products at unbeatable prices.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/shop">All Products</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
            <li>
              <Link href="/deals">Deals</Link>
            </li>
            <li>
              <Link href="/new">New Arrivals</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/returns">Returns</Link>
            </li>
            <li>
              <Link href="/shipping">Shipping Info</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe for updates & offers.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm rounded-l-md focus:outline-none bg-white text-black"
            />
            <button className="bg-green-700  text-white px-4 py-2 text-sm rounded-r-md hover:bg-green-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}
