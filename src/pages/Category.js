import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import categories from '../data/categories.json';
import products from '../data/products.json';
import { useCart } from '../context/CartContext';

const Category = () => {
  const { categoryId } = useParams();
  const { totalCount, totalPrice, addToCart } = useCart();

  // Filters state
  const [deliveryOnly, setDeliveryOnly] = useState(false);
  const [expensiveOnly, setExpensiveOnly] = useState(false);
  const [bestSellingOnly, setBestSellingOnly] = useState(false);

  // Find active category
  const category = categories.find(c => c.id === categoryId);
  const categoryName = category ? category.name : 'Keyboards';

  // Products belonging to this category
  const categoryProducts = products.filter(
    product => product.categoryId === categoryId
  );

  // Apply filters
  const displayedProducts = categoryProducts.filter(product => {
    if (deliveryOnly && !product.delivery) {
      return false;
    }
    if (expensiveOnly && product.price < 100) {
      return false;
    }
    if (bestSellingOnly && !product.inStock) {
      return false;
    }
    return true;
  });

  return (
    <div className="home-container">
      {/* Top Header with Back to Home & Cart widget (one link to checkout) */}
      <header className="category-header">
        <Link to="/" className="back-link">
          &larr; Home
        </Link>
        <Link to="/checkout" className="cart-status-link">
          <span className="cart-count-badge">{totalCount}</span>
          <span className="cart-total-price">
            ${totalPrice.toFixed(2)}
          </span>
        </Link>
      </header>

      {/* Main Content Area */}
      <div className="category-page-content">
        {/* Left Column: Filter Sidebar */}
        <aside className="filter-sidebar">
          <h2 className="filter-title">Filter</h2>

          <div className="filter-list">
            <label className="filter-item">
              <input
                type="checkbox"
                checked={deliveryOnly}
                onChange={e => setDeliveryOnly(e.target.checked)}
              />
              <span className="filter-name">Delivery</span>
            </label>

            <label className="filter-item">
              <input
                type="checkbox"
                checked={expensiveOnly}
                onChange={e => setExpensiveOnly(e.target.checked)}
              />
              <span className="filter-name">Expensive</span>
            </label>

            <label className="filter-item">
              <input
                type="checkbox"
                checked={bestSellingOnly}
                onChange={e => setBestSellingOnly(e.target.checked)}
              />
              <span className="filter-name">Best-selling</span>
            </label>
          </div>
        </aside>

        {/* Right Column: Category Title and Products Grid */}
        <main className="category-main">
          <h1 className="category-heading">{categoryName}</h1>

          {displayedProducts.length > 0 ? (
            <div className="products-row">
              {displayedProducts.map(product => (
                <div key={product.id} className="product-item-card">
                  <div className="product-img-wrapper">
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="product-img"
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src =
                          'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=200&fit=crop';
                      }}
                    />
                  </div>

                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price-text">
                    ${Number(product.price).toFixed(2)}
                  </div>

                  <div
                    className={`product-stock-status ${
                      product.inStock ? 'in-stock' : 'out-of-stock'
                    }`}
                  >
                    {product.inStock ? 'In stock' : 'Out of stock'}
                  </div>

                  {/* On click Add to Cart */}
                  <button
                    type="button"
                    className={`btn-add ${
                      product.inStock ? 'btn-active' : 'btn-disabled'
                    }`}
                    disabled={!product.inStock}
                    onClick={() => addToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-products-msg">
              No products found matching the selected filters.
            </p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Category;
