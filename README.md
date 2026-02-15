# 🛒 ShopEase – Grocery E-commerce App

ShopEase is a modern grocery e-commerce web application built with **Next.js 14 (App Router)** and **Tailwind CSS**.  
Users can browse products, view product details, and add items to the cart with a smooth shopping experience.

---

## 🚀 Features

- 🏠 Home page
- 🛍️ Product listing page
- 📄 Product details page
- 🛒 Add to cart functionality
- 🔢 Cart quantity counter in navbar
- ✅ Success message on add to cart
- 📱 Fully responsive navbar with active route highlight
- ⚡ Built using Next.js App Router

---

## 🛠️ Tech Stack

- **Next.js 14**
- **React**
- **Tailwind CSS**
- **Lucide React Icons**
- **Context API (Cart Management)**

---

## 📦 Getting Started

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Run Development Server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

The app will automatically reload when you make changes.

---

## 📁 Project Structure

```
app/
 ├── page.js
 ├── products/
 │   ├── page.js
 │   └── [id]/
 │       └── page.js
 ├── cart/
 │   └── page.js
 ├── context/
 │   └── CartContext.js
components/
 ├── Navbar.js
 ├── ProductCard.js
 └── ProductDetailsClient.js
```

---

## 🛒 Cart System

Cart state is managed using **React Context API**.

Users can:

- Add products to cart
- Increase product quantity
- View total cart items in navbar
- See success message after adding product

---

## 🎨 Styling

This project uses **Tailwind CSS** for:

- Responsive design
- Modern UI
- Utility-first styling

---

## 🚀 Deployment

You can easily deploy this app using **Vercel**:

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Click Deploy

---

## 📚 Learn More

- https://nextjs.org/docs
- https://nextjs.org/learn

---

## 👨‍💻 Author
Hafsa Rashid 
AdsFixter
