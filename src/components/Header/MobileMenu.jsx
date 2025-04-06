import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-menu-container">
      <button 
        className={`hamburger-button ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/healthcare" onClick={closeMenu}>Healthcare</Link>
            </li>
            <li>
              <Link to="/water" onClick={closeMenu}>Water Sollution</Link>
            </li>
            <li>
              <Link to="/education" onClick={closeMenu}>Education</Link>
            </li>
            <li>
              <Link to="/news" onClick={closeMenu}>News</Link>
            </li>
            <li>
              <Link to="/programs" onClick={closeMenu}>Programs</Link>
            </li>
            <li>
              <Link to="/wildlife" onClick={closeMenu}>Wildlife</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </div>
  );
}

export default MobileMenu;
