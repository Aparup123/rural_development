// NewsPage/components/NewsList.js
import React from 'react';
import { Box, Typography, Divider, Grid, Paper, CircularProgress } from '@mui/material';
import NewsCard from './NewsCard';

function NewsList({ 
  news, 
  loading, 
  error, 
  categoryInfo, 
  isMobile, 
  onNewsSelect, 
  getCategoryInfo 
}) {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Paper elevation={1} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h6" color="error">
          Error loading news data
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {error}
        </Typography>
      </Paper>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {categoryInfo.name}
      </Typography>
      <Typography variant="body1" paragraph color="text.secondary">
        Stay updated with the latest news and information related to rural development and agriculture.
      </Typography>
      <Divider sx={{ mb: 4 }} />

      {news.length > 0 ? (
        <Grid container spacing={3}>
          {news.map((newsItem) => (
            <Grid 
              item 
              xs={12}        // 1 card per row on extra small screens
              sm={6}         // 2 cards per row on small screens
              md={isMobile ? 6 : 4}  // 2 cards if sidebar is shown, 3 cards if no sidebar on medium screens
              lg={isMobile ? 4 : 3}  // 3 cards if sidebar is shown, 4 cards if no sidebar on large screens
              key={newsItem.id}
              sx={{ display: 'flex' }}
            >
              <NewsCard 
                news={newsItem} 
                categoryInfo={getCategoryInfo(newsItem.categoryId)}
                onNewsSelect={onNewsSelect}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper elevation={1} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            No news available in this category.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Please check back later or select a different category.
          </Typography>
        </Paper>
      )}
    </Box>
  );
}

export default NewsList;