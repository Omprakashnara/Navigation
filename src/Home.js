
import React from 'react';
import './stylesheet.css'; 

function Home({onNavigate}) {

    const backgroundImageStyle = {
        backgroundImage: 'url("https://media.tenor.com/b6FE6drZPbQAAAAd/earth-spin-galaxy.gif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Ensures the background covers the entire viewport height
        width: '100%',   // Ensures the background covers the entire viewport width
        display: 'flex', // Allows you to use flexbox for centering content vertically and horizontally
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center',     // Center content vertically
      };
    
  return (
    <div style={backgroundImageStyle}>
      <header className="header">
        <nav className="navbar">
          <h2 className="logo"><a href="#">Navigate</a></h2>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" id="hamburger-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </label>
          <ul className="links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <div className='buttons'>
       
            <button onClick={onNavigate}><a href="#" className="signup">Sign Up</a></button>
          </div>
        </nav>
      </header>
      <section className="hero-section">
        <div className="hero">
          <h2>Discover and Explore</h2>
        </div>
      </section>
    </div>
  );
}

export default Home;
