// NewsPage/components/NewsCard.js
import React from 'react';
import { 
  Card, 
  CardActionArea, 
  CardContent, 
  CardMedia, 
  Typography, 
  Chip, 
  Box, 
  Button 
} from '@mui/material';

function NewsCard({ news, categoryInfo, onNewsSelect }) {
  return (
    <Card 
      elevation={2}
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 8
        }
      }}
    >
      <CardActionArea 
        onClick={() => onNewsSelect(news)}
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'stretch'
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image={news.image || "/placeholder-image.jpg"}
          alt={news.title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Chip 
            label={categoryInfo.name} 
            size="small"
            sx={{ 
              mb: 1,
              bgcolor: categoryInfo.color,
              color: 'white',
              alignSelf: 'flex-start'
            }} 
          />
          <Typography gutterBottom variant="h6" component="h2" sx={{ flexGrow: 0 }}>
            {news.title}
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
            {news.date}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            paragraph 
            sx={{ 
              flexGrow: 1,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {news.summary}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 'auto' }}>
            <Button variant="text" color="primary">
              Read More
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NewsCard;