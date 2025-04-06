import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import './Header.css';
import Logo from '../../assets/images/logo.png'; // Assuming you have a logo image

function Header() {
  const location = useLocation();
  
  // Function to check if a path is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };
  
  return (
    <header className="header">
      <div className="flex justify-center">
        <div className="header-content w-[75%]">
          <div className="logo flex items-center gap-2">
            {/* Logo Section */}
            <img src={Logo} alt="Logo" className="w-[45px] h-[45px] " />
            
            <Link to="/">UpliftIndia
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="main-nav">
            <ul>
              <li className={isActive('/healthcare') ? 'active' : ''}>
                <Link to="/healthcare">Healthcare</Link>
              </li>
              <li className={isActive('/water') ? 'active' : ''}>
                <Link to="/water">Water Sollution</Link>
              </li>
              <li className={isActive('/education') ? 'active' : ''}>
                <Link to="/education">Education</Link>
              </li>
              <li className={isActive('/news') ? 'active' : ''}>
                <Link to="/news">News</Link>
              </li>
              <li className={isActive('/programs') ? 'active' : ''}>
                <Link to="/programs">Programs</Link>
              </li>
              <li className={isActive('/wildlife') ? 'active' : ''}>
                <Link to="/wildlife">Wildlife</Link>
              </li>
              <li className={isActive('/about') ? 'active' : ''}>
                <Link to="/about">About</Link>
              </li>
              <li className={isActive('/contact') ? 'active' : ''}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu - Only visible on smaller screens */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;