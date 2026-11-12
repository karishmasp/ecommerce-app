import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../data/categories.json';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { totalCount, totalPrice } = useCart();

  return (
    <div className="home-container">
      {/* Top right cart status: count and price as one link */}
      <header className="home-header">
        <Link to="/checkout" className="cart-status-link">
          <span className="cart-count-badge">{totalCount}</span>
          <span className="cart-total-price">
            ${totalPrice.toFixed(2)}
          </span>
        </Link>
      </header>

      {/* Centered category cards */}
      <main className="home-content">
        <div className="categories-container">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="category-card"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
