# E-Commerce React Application

A modern, minimalist e-commerce web application built with **React**, **React Router**, and the **Context API**.

---

## 🚀 Features

- **Home Page:**
  - Minimalist layout featuring centered category cards (**Keyboards** and **Headphones**).
  - Top-right live cart indicator displaying total product count and cart price.
  - Category cards dynamically loaded from `categories.json`.

- **Dynamic Category Page (`/category/:categoryId`):**
  - Displays products belonging to the selected category.
  - **Filter Sidebar:** Interactive filters for **Delivery**, **Expensive** (items $\ge \$100$), and **Best-selling**.
  - **Product Cards:** Thumbnail image, product name, price, stock status (<span style="color:#16a34a">In stock</span> / <span style="color:#ef4444">Out of stock</span>), and **Add to cart** action.
  - Disabled button state for out-of-stock items.

- **Checkout Page (`/checkout`):**
  - Lists all items currently in the shopping cart.
  - **Quantity Stepper:** Easily increase (`+`) or decrease (`−`) item quantities or edit directly via an underlined input field.
  - **Item Removal:** One-click item removal using the circular delete button (`✕`).
  - Empty cart state with a link to return to shopping.

- **State Management & Persistence:**
  - Global cart state managed with **React Context API** (`CartContext`).
  - **Local Storage Persistence:** Cart state automatically persists across page refreshes.

---

## 🛠️ Tech Stack

- **Frontend:** [React 18](https://reactjs.org/)
- **Routing:** [React Router v7](https://reactrouter.com/) (`react-router-dom`)
- **State Management:** React Context API & Hooks (`useState`, `useEffect`, `useContext`, `useParams`)
- **Styling:** Custom CSS3 (Clean, responsive, card-based layout)
- **Data Source:** Static JSON database (`categories.json` & `products.json`)

---

## 📁 Project Structure

```text
ecommerce-app/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── context/
│   │   └── CartContext.js      # Global cart state & actions
│   ├── data/
│   │   ├── categories.json     # Categories database
│   │   └── products.json       # Products database
│   ├── pages/
│   │   ├── Category.js         # Dynamic Category page with filters
│   │   ├── Checkout.js         # Checkout & cart table
│   │   └── Home.js             # Minimalist Home page
│   ├── App.css                 # Application styles
│   ├── App.js                  # Main router & provider setup
│   ├── index.js                # React root entry point
│   └── reportWebVitals.js
├── package.json
└── README.md
```

---

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/karishmasp/ecommerce-app.git
   cd ecommerce-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 📜 Available Scripts

- `npm start` – Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- `npm run build` – Builds the production-ready optimized app into the `build/` folder.
- `npm test` – Launches the test runner.
- `npm run format:lint` – Formats code with Prettier and runs ESLint.

---

## 📄 License

This project is licensed under the MIT License.
