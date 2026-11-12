import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../data/categories.json';

const Home = () => {
  return (
    <div className="home-container">
      {/* Top right cart badge matching the screenshot */}
      <header className="home-header">
        <Link to="/checkout" className="cart-status-link">
          <span className="cart-count-badge">5</span>
          <span className="cart-total-price">$93.00</span>
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
