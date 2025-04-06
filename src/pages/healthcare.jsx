// src/App.jsx
import React from 'react';
import { 
  Container, Grid, Card, CardContent, Typography, Box, Avatar
} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MedicationIcon from '@mui/icons-material/Medication';
import PeopleIcon from '@mui/icons-material/People';
import FeedbackIcon from '@mui/icons-material/Feedback';
// Note: You'll need to replace this with an actual image path
import hospitalHeroImage from '../assets/images/healthcare_image.jpeg';

function HealthCare() {
  const categories = [
    {
      title: 'Find a Doctor',
      description: 'Search our database of specialized physicians and healthcare providers to find the right care for your needs',
      icon: <MedicalServicesIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Medical Services',
      description: 'Explore our comprehensive range of medical specialties and advanced treatment options',
      icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Preventive Care',
      description: 'Learn about health screenings, vaccinations, and lifestyle changes to maintain optimal health',
      icon: <HealthAndSafetyIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Appointment Booking',
      description: 'Schedule your next visit online with our simple and secure appointment system',
      icon: <CalendarMonthIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Patient Resources',
      description: 'Access health information, insurance details, and educational materials to support your healthcare journey',
      icon: <PeopleIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Emergency Services',
      description: 'Learn about our 24/7 emergency care services and what to do in case of a medical emergency',
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Pharmacy Services',
      description: 'Conveniently fill prescriptions and access medication information through our pharmacy network',
      icon: <MedicationIcon sx={{ fontSize: 40 }} />
    },
    {
      title: 'Patient Feedback',
      description: 'Share your experience and help us improve our healthcare services',
      icon: <FeedbackIcon sx={{ fontSize: 40 }} />
    }
  ];

  return (
    <Container sx={{ width:"75%", bgcolor: '#f5f9ff', pt: 2, pb: 4 }}>
      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        height: {xs: '250px', sm: '325px', md: '400px'},
        width: 1,
        mx: 'auto',
        backgroundImage: `url(${hospitalHeroImage})`,
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
            Compassionate Care
          </Typography>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1, fontSize: {xs: '1.75rem', sm: '2.25rem', md: '3rem'} }}>
            Advanced Medicine
          </Typography>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', fontSize: {xs: '1.75rem', sm: '2.25rem', md: '3rem'} }}>
            Better Health
          </Typography>
        </Box>
      </Box>
      
      {/* Cards Grid */}
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
                      backgroundColor: '#4EAEDE',
                      color: 'white'
                    }}>
                      {category.icon}
                    </Avatar>
                  </Box>
                  <Box sx={{ height: '50px', mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h6" component="h2" sx={{ 
                      fontWeight: 'bold', 
                      color: '#2A5082',
                      fontSize: {xs: '1.1rem', md: '1.25rem'}
                    }}>
                      {category.title}
                    </Typography>
                  </Box>                  
                  <Box sx={{ height: '100px', overflow: 'hidden' }}>
                    <Typography variant="body2" sx={{
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      color: '#555',
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

export default HealthCare;