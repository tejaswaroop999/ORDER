// OrderSummary.js
import React from 'react';
import './Summary.css'; 

const OrderSummary = ({ totalOrders, totalPages,ordersPerPage, paginate,goToPage, currentPage,onDispatchSelected }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="order-summary">
      <h2>Product Summary</h2>
      <div className="order-summary-controls">
        <div className="column-visibility-dropdown">
          <label htmlFor="column-dropdown">Show</label>
          <select id="column-dropdown">
            <option value="all">ALL COLUMNS</option>
            <option value="all">List</option>
            <option value="all">Orders</option>
            <option value="all">Return</option>
            {/* Additional options */}
          </select>
        </div>
        <button onClick={onDispatchSelected} className="dispatch-button">
          DISPATCH SELECTED
        </button>
      </div>
      <div className="pagination-controls">
      {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
        <button onClick={() => goToPage(currentPage + 1)}
         disabled={currentPage === totalPages}>
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
