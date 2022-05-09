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

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
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
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <Header /> */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}