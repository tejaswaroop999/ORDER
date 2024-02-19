// OrdersTable.js
import React from 'react';
import { FaLink } from 'react-icons/fa';// using React Icons for the link icon
import './Table.css'; // Make sure to include your CSS file

// Example mock data
const orders = [
  {
    id: '1077620',
    shipNumber: '17713',
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@example.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: '1077620',
    shipNumber: '17713',
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@example.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: '1077620',
    shipNumber: '17713',
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@example.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: '1077620',
    shipNumber: '17713',
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@example.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: '1077620',
    shipNumber: '17713',
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@example.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: '1077620',
    shipNumber: '17713',
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@example.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: '1077620',
    shipNumber: '17713',
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@example.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: '1077620',
    shipNumber: '17713',
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@example.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: '1077620',
    shipNumber: '17713',
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@example.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: '1077620',
    shipNumber: '17713',
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@example.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: '1077620',
    shipNumber: '17713',
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@example.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: '1077620',
    shipNumber: '17713',
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@example.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: '1077620',
    shipNumber: '17713',
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@example.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: '1077620',
    shipNumber: '17713',
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@example.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: '1077620',
    shipNumber: '17713',
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@example.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  // ... more orders
];

const OrdersTable = (order) => {
  return (
    <div className="orders-summaryr">
      <table className="orders-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th> {/* Checkbox in header for checkbox column */}
            <th>ID</th>
            <th>SHIP#</th>
            <th>Date</th>
            <th>Status</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Country</th>
            <th>Shipping</th>
            <th>Source</th>
            <th>Order Type</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td><input type="checkbox" /></td> {/* Checkbox in the first column */}
              <td>{order.id}</td>
              <td>{order.shipNumber}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>{order.customer}</td>
              <td>{order.email}</td>
              <td>{order.country}</td>
              <td>{order.shipping}</td>
              <td>{order.source}</td>
              <td>{order.orderType}</td>
              <td className="link-icon-cell">
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <FaLink className="link-icon" /> {/* Use the FaLink icon here */}
            </a>
            </td>            
            </tr>
          ))}
        </tbody>
      </table>
      {/* Include Pagination Component here if needed */}
    </div>
  );
};

export default OrdersTable;
