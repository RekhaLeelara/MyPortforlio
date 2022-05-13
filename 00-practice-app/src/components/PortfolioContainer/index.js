//import all the necessary files
import React, { useState } from 'react';
import Nav from '../Nav';
import Portfolio from '../Portfolio/index'
import About from '../About'
import Resume from '../Resume'
import Contact from '../Contact'


export default function PortfolioContainer() {

  //setting default state and defining "setCurrentPage" for the change
  const [currentPage, setCurrentPage] = useState('About');

  // This method helps to render different pages based on the user navigation click
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  //setting current page and handle the navigation
  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}


