// src/components/News/NewsCategory.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function NewsCategory({ categories }) {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [newsItems, setNewsItems] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  
  // Mock news data for each category
  const newsByCategory = {
    latest: [
      {
        id: 'latest-1',
        title: 'New Irrigation System Benefits 500 Farmers',
        date: 'April 1, 2025',
        image: '/src/assets/images/news-1.jpg',
        summary: 'A modern irrigation system has been installed in Greenwood County, helping farmers increase crop yield by 30%.',
        content: 'The Rural Development Initiative, in partnership with local authorities, has successfully implemented a state-of-the-art irrigation system that will benefit approximately 500 farmers in Greenwood County. The project, which took six months to complete, is expected to increase agricultural productivity by at least 30% and significantly improve water conservation efforts in the region.'
      },
      {
        id: 'latest-2',
        title: 'Organic Farming Certification Program Launches',
        date: 'March 28, 2025',
        image: '/src/assets/images/news-2.jpg',
        summary: 'New program helps small farmers obtain organic certification at reduced costs.',
        content: 'A new initiative aimed at helping small-scale farmers obtain organic certification at significantly reduced costs has been launched this week. The program, funded by a coalition of agricultural organizations, will provide technical assistance, training, and financial support to farmers transitioning to organic methods. It aims to certify over 200 farms in the first year.'
      }
    ],
    market: [
      {
        id: 'market-1',
        title: 'Wheat Prices Show Strong Recovery',
        date: 'April 2, 2025',
        image: '/src/assets/images/market-1.jpg',
        summary: 'Wheat prices have increased by 15% following recent weather challenges in major producing regions.',
        content: 'Wheat futures have shown significant recovery in the past month, with prices increasing by approximately 15%. This upturn follows adverse weather conditions in several major wheat-producing regions globally, which have affected crop yields. Analysts suggest farmers might want to consider strategic selling plans to capitalize on this price movement.'
      },
      {
        id: 'market-2',
        title: 'New Export Opportunities for Local Produce',
        date: 'March 30, 2025',
        image: '/src/assets/images/market-2.jpg',
        summary: 'Trade agreement opens new markets for locally-grown vegetables and fruits.',
        content: 'A recently finalized trade agreement has opened significant export opportunities for locally-grown produce. The agreement, which reduces tariffs on agricultural goods, is expected to particularly benefit vegetable and fruit growers in the region. Officials estimate it could increase agricultural exports by up to 20% over the next three years.'
      }
    ],
    government: [
      {
        id: 'gov-1',
        title: 'New Subsidy Program for Small-Scale Farmers',
        date: 'March 31, 2025',
        image: '/src/assets/images/gov-1.jpg',
        summary: 'Government announces $50 million subsidy program targeted at small-scale farmers.',
        content: 'The Ministry of Agriculture has announced a new $50 million subsidy program specifically designed to support small-scale farmers. The program will provide financial assistance for purchasing equipment, implementing sustainable farming practices, and accessing modern agricultural technologies. Applications will open next month, with funds to be disbursed beginning in June.'
      }
    ],
    weather: [
      {
        id: 'weather-1',
        title: 'Seasonal Rainfall Forecast: Above Average Precipitation Expected',
        date: 'April 1, 2025',
        image: '/src/assets/images/weather-1.jpg',
        summary: 'Meteorological Department predicts higher than normal rainfall for the coming growing season.',
        content: 'The latest long-term forecast from the Meteorological Department indicates that the upcoming growing season will likely see above-average precipitation across most agricultural regions. Farmers are advised to prepare drainage systems and consider crop varieties that perform well in wetter conditions. The forecast suggests rainfall could be 15-20% above historical averages.'
      }
    ],
    advice: [
      {
        id: 'advice-1',
        title: 'Maximizing Yield with Crop Rotation Strategies',
        date: 'March 29, 2025',
        image: '/src/assets/images/advice-1.jpg',
        summary: 'Expert advice on implementing effective crop rotation to improve soil health and yields.',
        content: 'Agricultural experts have released new guidelines on optimizing crop rotation strategies to maximize yields while maintaining soil health. The recommended practices, based on five years of field research, show that properly implemented rotation can increase yields by up to 25% while reducing fertilizer needs. The guide includes specific rotation recommendations for different soil types and climate conditions.'
      }
    ],
    community: [
      {
        id: 'community-1',
        title: 'Annual Farmers Market to Begin Next Month',
        date: 'April 2, 2025',
        image: '/src/assets/images/community-1.jpg',
        summary: 'The popular regional farmers market returns with expanded vendor opportunities.',
        content: 'The annual Regional Farmers Market is set to begin next month with an expanded format that will accommodate up to 50 additional vendors. The market, which runs every Saturday from May through October, provides a vital direct-to-consumer sales channel for local agricultural producers. This year will also feature educational workshops on sustainable farming practices and cooking demonstrations using locally sourced ingredients.'
      }
    ]
  };

  useEffect(() => {
    // Find the current category
    const currentCategory = categories.find(cat => cat.id === categoryId);
    setCategory(currentCategory);
    
    // Set news items for this category
    setNewsItems(newsByCategory[categoryId] || []);
    
    // Reset selected news when changing categories
    setSelectedNews(null);
  }, [categoryId, categories]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div className="category-page">
      {selectedNews ? (
        <div className="news-detail">
          <button className="back-button" onClick={() => setSelectedNews(null)}>
            ← Back to {category.name}
          </button>
          <div className="news-header">
            <span className="news-category-tag" style={{ backgroundColor: category.color }}>
              {category.name}
            </span>
            <h3>{selectedNews.title}</h3>
            <p className="news-date">{selectedNews.date}</p>
          </div>
          <div className="news-image-container">
            <img src={selectedNews.image} alt={selectedNews.title} className="news-image" />
          </div>
          <div className="news-content">
            <p>{selectedNews.content}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="category-header" style={{ borderColor: category.color }}>
            <h2>{category.name}</h2>
            <p>Latest updates and information about {category.name.toLowerCase()}</p>
          </div>
          
          {newsItems.length > 0 ? (
            <div className="news-grid">
              {newsItems.map(news => (
                <div className="news-card" key={news.id} onClick={() => setSelectedNews(news)}>
                  <div className="news-card-image">
                    <img src={news.image} alt={news.title} />
                  </div>
                  <div className="news-card-content">
                    <span className="news-category-tag" style={{ backgroundColor: category.color }}>
                      {category.name}
                    </span>
                    <h4>{news.title}</h4>
                    <p className="news-date">{news.date}</p>
                    <p className="news-summary">{news.summary}</p>
                    <button className="read-more">Read More</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-news">
              <p>No recent news in this category. Please check back later.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default NewsCategory;