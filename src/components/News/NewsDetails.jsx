// NewsPage/components/NewsDetail.js
import React from 'react';
import { Box, Typography, Paper, Chip, Button, CardMedia } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function NewsDetail({ news, categoryInfo, onBack }) {
  return (
    <Box>
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={onBack} 
        sx={{ mb: 2 }}
      >
        Back to {categoryInfo.name}
      </Button>
      <Paper elevation={3} sx={{ p: { xs: 2, md: 3 }, mb: 4 }}>
        <Chip 
          label={categoryInfo.name} 
          sx={{ 
            bgcolor: categoryInfo.color,
            color: 'white',
            mb: 2
          }} 
        />
        <Typography variant="h4" component="h1" gutterBottom>
          {news.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {news.date}
        </Typography>
        <Box sx={{ my: 3 }}>
          <CardMedia
            component="img"
            image={news.image || "/placeholder-image.jpg"}
            alt={news.title}
            sx={{ 
              width: '100%', 
              borderRadius: 1,
              maxHeight: '400px',
              objectFit: 'cover'
            }}
          />
        </Box>
        <Typography variant="body1" paragraph>
          {news.content}
        </Typography>
      </Paper>
    </Box>
  );
}

export default NewsDetail;