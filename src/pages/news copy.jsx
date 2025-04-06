// pages/news/index.js
import React, { useState, useEffect } from 'react';
import { Container, Box, Button, useMediaQuery, Drawer, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate, useParams } from 'react-router-dom';
import CategoryList from '../components/News/CategoryList';
import NewsList from '../components/News/NewsList';
import NewsDetail from '../components/News/NewsDetails';

// Define the sidebar width as a constant
const SIDEBAR_WIDTH = 280; // in pixels

// Define news categories
const CATEGORIES = [
  { id: 'all', name: 'All News', color: '#1976d2' }, // primary
  { id: 'latest', name: 'Latest Agriculture News', color: '#1976d2' }, // primary
  { id: 'market', name: 'Market Updates', color: '#ed6c02' }, // warning
  { id: 'government', name: 'Government Policies', color: '#0288d1' }, // info
  { id: 'weather', name: 'Weather Forecast', color: '#9c27b0' }, // secondary
  { id: 'advice', name: 'Expert Advice and Tips', color: '#2e7d32' }, // success
  { id: 'community', name: 'Farmer Forums and Community', color: '#d32f2f' } // error
];

function News()  {
  const theme = useTheme();
  const navigate = useNavigate();
  const { category , newsId } = useParams();
  console.log("category:",category)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedNews, setSelectedNews] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sync URL params with state
  useEffect(() => {
    setSelectedCategory(category?category:'all');
  }, [category]);

  // Fetch news data when category changes
  useEffect(() => {
    fetchNews();
  }, [selectedCategory]);

  // Fetch selected news when newsId changes
  useEffect(() => {
    if (newsId && newsData.length > 0) {
      const found = newsData.find(item => item.id === newsId);
      if (found) {
        setSelectedNews(found);
      } else {
        // If news item not found in current data, try to fetch it
        fetchSingleNews(newsId);
      }
    } else {
      setSelectedNews(null);
    }
  }, [newsId, newsData]);

  const fetchNews = async () => {
    setLoading(true);
    try {
      // Adjust query parameters based on selected category
      let queryText = 'farming';
      if (selectedCategory !== 'all') {
        queryText += ` ${selectedCategory}`;
      }
      console.log("query:",queryText)
      const response = await fetch(
        `https://api.worldnewsapi.com/search-news?api-key=b215419734f6449bb21449212f169624&text=${queryText}&source-country=in&headlines-only=true`
      );
      
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data && data.news) {
        // Transform API data to match our expected format
        const formattedNews = data.news.map((item, index) => ({
          id: item.id || `news-${index}`,
          title: item.title,
          summary: item.text.substring(0, 150) + '...',
          content: item.text,
          date: new Date(item.publish_date).toLocaleDateString(),
          image: item.image || "/placeholder-image.jpg",
          categoryId: selectedCategory,
          url: item.url
        }));
        
        setNewsData(formattedNews);
      } else {
        setNewsData([]);
      }
    } catch (err) {
      console.error('Error fetching news:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSingleNews = async (id) => {
    // This would be implemented if the API provides a single news item endpoint
    // For now, we'll just navigate back to the category page if the news isn't found
    navigate(`/news/${selectedCategory}`);
  };

  const handleCategorySelect = (categoryId) => {
    // Update the URL instead of directly setting state
    navigate(`/news/${categoryId}`);
    setDrawerOpen(false);
  };

  const handleNewsSelect = (news) => {
    // Update the URL to include the news ID
    navigate(`/news/${selectedCategory}/${news.id}`);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    // Navigate back to the category page
    navigate(`/news/${selectedCategory}`);
  };

  const getCategoryInfo = (categoryId) => {
    const category = CATEGORIES.find(cat => cat.id === categoryId);
    return category || { name: 'News', color: theme.palette.primary.main };
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, width: '75%', margin: 'auto', padding: '0 8px' }}>
      <Container maxWidth="xl" sx={{ my: 4 }}>
        {/* Mobile Category Button & Header */}
        {isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h5" component="h1" fontWeight="bold">
              Rural News
            </Typography>
            <Button 
              variant="outlined" 
              startIcon={<FilterListIcon />} 
              onClick={() => setDrawerOpen(true)}
            >
              Categories
            </Button>
          </Box>
        )}

        {/* Mobile Drawer */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: SIDEBAR_WIDTH }} role="presentation">
            <Box sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
              <Typography variant="h6">News Categories</Typography>
            </Box>
            <CategoryList 
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />
          </Box>
        </Drawer>

        <Box sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2
            }}>
          {/* Desktop Sidebar - Fixed Position */}
          {!isMobile && (
            <Box sx={{ width: SIDEBAR_WIDTH, flexShrink: 0 }}>
              <Box 
                sx={{ 
                  width: SIDEBAR_WIDTH,
                  p: 2, 
                  position: 'sticky', 
                  top: 16,
                  maxHeight: 'calc(100vh - 32px)',
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                  boxShadow: 2
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ mb: 2, pb: 1, borderBottom: `1px solid ${theme.palette.divider}` }}
                >
                  News Categories
                </Typography>
                <CategoryList 
                  categories={CATEGORIES}
                  selectedCategory={selectedCategory}
                  onCategorySelect={handleCategorySelect}
                />
              </Box>
            </Box>
          )}

          {/* Main Content - Takes remaining space */}
          <Box sx={{ flexGrow: 1 }}>
            {selectedNews ? (
              <NewsDetail 
                news={selectedNews}
                categoryInfo={getCategoryInfo(selectedNews.categoryId || selectedCategory)}
                onBack={handleBackToList}
              />
            ) : (
              <NewsList 
                news={newsData}
                loading={loading}
                error={error}
                categoryInfo={getCategoryInfo(selectedCategory)}
                isMobile={isMobile}
                onNewsSelect={handleNewsSelect}
                getCategoryInfo={getCategoryInfo}
              />
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default News;