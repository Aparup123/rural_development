// src/components/News/HomeButton.jsx
import { Link } from 'react-router-dom';
import './HomeButton.css';

function HomeButton() {
  return (
    <Link to="/" className="home-button">
      <span className="home-icon">⌂</span>
    </Link>
  );
}

export default HomeButton;