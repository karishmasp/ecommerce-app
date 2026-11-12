import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, removeFromCart, updateQuantity, totalCount, totalPrice } =
    useCart();

  return (
    <div className="home-container">
      {/* Top Header with Back to Home & Cart widget */}
      <header className="category-header">
        <Link to="/" className="back-link">
          &larr; Home
        </Link>
        <Link to="/checkout" className="cart-status-link">
          <span className="cart-count-badge">{totalCount}</span>
          <span className="cart-total-price">${totalPrice.toFixed(2)}</span>
        </Link>
      </header>

      {/* Main Checkout Area */}
      <div className="checkout-page-content">
        <h1 className="checkout-heading">Checkout</h1>

        <div className="checkout-card">
          {cart.length === 0 ? (
            <div className="empty-checkout">
              <p>Your cart is empty.</p>
              <Link to="/" className="back-link" style={{ fontWeight: 600 }}>
                &larr; Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="checkout-table">
              {/* Table Header */}
              <div className="checkout-table-header">
                <div className="col-name">Name</div>
                <div className="col-price">Price</div>
                <div className="col-quantity">Quantity</div>
                <div className="col-action"></div>
              </div>

              {/* Cart Items */}
              <div className="checkout-table-body">
                {cart.map(item => (
                  <div key={item.id} className="checkout-row">
                    {/* Thumbnail and Name */}
                    <div className="col-name product-cell">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="checkout-thumb"
                        onError={e => {
                          e.target.onerror = null;
                          e.target.src =
                            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=100&h=100&fit=crop';
                        }}
                      />
                      <span className="checkout-product-name">{item.name}</span>
                    </div>

                    {/* Price */}
                    <div className="col-price checkout-price-cell">
                      ${Number(item.price).toFixed(2)}
                    </div>

                    {/* Quantity with underline */}
                    <div className="col-quantity checkout-qty-cell">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={e =>
                          updateQuantity(item.id, e.target.value)
                        }
                        className="quantity-underline-input"
                      />
                    </div>

                    {/* Black circle remove button with white ✕ */}
                    <div className="col-action checkout-action-cell">
                      <button
                        type="button"
                        className="btn-remove-circle"
                        onClick={() => removeFromCart(item.id)}
                        title="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
