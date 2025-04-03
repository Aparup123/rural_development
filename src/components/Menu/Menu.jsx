// src/components/Menu/Menu.jsx
import { useEffect } from 'react';
import './Menu.css';

const Menu = ({ isOpen, toggleMenu }) => {
  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && isOpen) {
        toggleMenu();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, toggleMenu]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul className="menu-items">
          <li><a href="#" onClick={toggleMenu}>Home</a></li>
          <li><a href="#programs" onClick={toggleMenu}>Programs</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#resources" onClick={toggleMenu}>Resources</a></li>
          <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Menu;