// src/App.jsx
import React from 'react';
import { 
  Container, Grid, Card, CardContent, Typography, Box, Avatar
} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import UpdateIcon from '@mui/icons-material/Update';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import EventIcon from '@mui/icons-material/Event';
import FeedbackIcon from '@mui/icons-material/Feedback';
import educationHeroImage from '../assets/images/student_image1.jpg';

function App() {
  const categories = [
    {
      title: 'Digital Library',
      description: 'Access the digital resources online, where every click opens the door to endless learning and inspiration',
      icon: <AutoStoriesIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Schools & Colleges',
      description: 'Explore ranked schools and colleges in your area, discover excellence for your journey',
      icon: <SchoolIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Schemes for Students',
      description: 'Explore the Schemes available for the students in your area',
      icon: <SchoolIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Past Achievements',
      description: 'Get inspired from the people and their achievements',
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Latest Updates',
      description: 'Stay updated with the latest information about nation and locality',
      icon: <UpdateIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Post an ISSUE',
      description: 'We are here to help Post an issue you are facing.',
      icon: <ReportProblemIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Future Plans',
      description: 'Discover our upcoming events and strategic initiatives designed to transform the education sector',
      icon: <EventIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Feedback',
      description: 'Help us know where to improve',
      icon: <FeedbackIcon sx={{ fontSize: 40 }} />
    }
  ];

  return (
    <Container sx={{ width:"75%", bgcolor: '#f8f8f8', pt: 2, pb: 4 }}>
      <Box sx={{
        position: 'relative',
        height: {xs: '250px', sm: '325px', md: '400px'},
        width: 1,
        mx: 'auto',
        backgroundImage: `url(${educationHeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        mb: 4,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }
      }}>
        <Box sx={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1, fontSize: {xs: '1.75rem', sm: '2.25rem', md: '3rem'} }}>
            Educate Today
          </Typography>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1, fontSize: {xs: '1.75rem', sm: '2.25rem', md: '3rem'} }}>
            Empower the Future
          </Typography>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', fontSize: {xs: '1.75rem', sm: '2.25rem', md: '3rem'} }}>
            Tomorrow
          </Typography>
        </Box>
      </Box>
      
      <Container sx={{ mb: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item key={index} size="auto">
              <Card sx={{ 
                display: 'flex',
                flexDirection: 'column',
                width: '20rem',
                height: '280px', 
                backgroundColor: '#fff',
                borderRadius: 1,
                boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                transition: '0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                },
              }}>
                <CardContent sx={{ 
                  flexGrow: 1,
                  textAlign: 'center',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                 
                  <Box sx={{ height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <Avatar sx={{ 
                      width: 80, 
                      height: 80,
                      backgroundColor: '#8AE78A',
                      color: 'white'
                    }}>
                      {category.icon}
                    </Avatar>
                  </Box>
                  <Box sx={{ height: '50px', mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h6" component="h2" sx={{ 
                      fontWeight: 'bold', 
                      color: '#333',
                      fontSize: {xs: '1.1rem', md: '1.25rem'}
                    }}>
                      {category.title}
                    </Typography>
                  </Box>                  
                  <Box sx={{ height: '100px', overflow: 'hidden' }}>
                    <Typography variant="body2" sx={{
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      color: '#666',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                    }}>
                      {category.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default App;