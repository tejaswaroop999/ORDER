//App.js (for React)
import React,{useState}from 'react';
import Navbar from './components/Navbar';
import SearchFilter from './components/Search and Filter';
import OrdersTable from './components/Table';
import Summary from './components/Summary'; 

import './App.css';
function App() {
  // Replace with actual data and logic
  const mockOrders = []; // This should be fetched from an API or static data
  const categories = [{ value: 'all', label: 'All' }];
 
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5); // Or another number of items per page

  // Calculate the currently displayed orders
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = mockOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="app">
      <Navbar />
      <SearchFilter label="Category" options={categories} />
      <Summary
        totalOrders={mockOrders.length}
        ordersPerPage={ordersPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
      <OrdersTable orders={currentOrders} />
      {/* Add more components as needed */}
    </div>
  );
}

export default App;
