// src/components/News/News.jsx
import { useState } from 'react';
import { Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import NewsCategory from './NewsCategory';
import HomeButton from './HomeButton';
import './News.css';

function News() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // News categories matching the image
  const categories = [
    { id: 'latest', name: 'Latest Agriculture News', color: '#4BD0C5' },
    { id: 'market', name: 'Market Updates', color: '#4BD0C5' },
    { id: 'government', name: 'Government Policies', color: '#4BD0C5' },
    { id: 'weather', name: 'Weather Forecast', color: '#4BD0C5' },
    { id: 'advice', name: 'Expert Advice and Tips', color: '#4BD0C5' },
    { id: 'community', name: 'Farmer Forums and Community', color: '#4BD0C5' }
  ];

  return (
    <div className="news-container">
      <div className="news-header-banner">
        <HomeButton />
        <div className="news-icon">
          <span className="news-icon-symbol">&#9783;</span>
        </div>
        <h1 className="news-title">MY NEWS</h1>
      </div>
      
      <div className="news-content">
        <div className="news-sidebar">
          {categories.map(category => (
            <Link 
              key={category.id}
              to={`/news/${category.id}`}
              className="category-btn"
              style={{ backgroundColor: category.color }}
            >
              {category.name}
            </Link>
          ))}
        </div>
        
        <div className="news-main-content">
          <Routes>
            <Route path="/" element={<NewsHome categories={categories} />} />
            <Route path="/:categoryId" element={<NewsCategory categories={categories} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

// News home page showing recent items from all categories
function NewsHome({ categories }) {
  return (
    <div className="news-home">
      <h2>Rural Development News</h2>
      <p>Stay updated with the latest news and information related to rural development and agriculture.</p>
      
      <div className="featured-news">
        <h3>Featured Stories</h3>
        <div className="news-grid">
          {[1, 2, 3].map(id => (
            <div className="news-card" key={id}>
              <div className="news-card-image">
                <img src={`/src/assets/images/news-${id}.jpg`} alt="News thumbnail" />
              </div>
              <div className="news-card-content">
                <span className="news-category-tag">Latest Agriculture News</span>
                <h4>New Sustainable Farming Methods Adopted in Rural Areas</h4>
                <p className="news-date">April 2, 2025</p>
                <p className="news-summary">Farmers across the region are adopting new sustainable practices...</p>
                <button className="read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="categories-preview">
        <h3>Browse News By Category</h3>
        <div className="categories-grid">
          {categories.map(category => (
            <Link 
              key={category.id}
              to={`/news/${category.id}`} 
              className="category-card"
              style={{ borderColor: category.color }}
            >
              <h4>{category.name}</h4>
              <span className="arrow-icon">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;