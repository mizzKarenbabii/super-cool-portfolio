import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from  './pages/Resume';
// import Header from './Header';
import Footer from './Footer';
import background from '../assets/images/cb479679965428ec22e87e97f810f75f.jpg'


export default function Portfoliocontainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
   
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
        return <Resume /> 
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='header-wrapper' style={{backgroundImage: `url(${background})`}}>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}