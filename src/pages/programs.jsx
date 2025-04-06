// src/ProgramsEventsSchemes.jsx
import React, { useState } from 'react';
import { 
  Container, Grid, Card, CardContent, Typography, Box, Tabs, Tab,
  Chip, Button, CardMedia, CardActions
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import CelebrationIcon from '@mui/icons-material/Celebration';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import programsHeroImage from '../assets/images/rural_india.jpg'; // Ensure the image is appropriate
import { programs, events, schemes } from '../components/ProgramsData'; // Import your data'

// Common card styles shared by all InfoCards (excluding conditional styles)
const commonCardSx = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  width: { xs: '18rem', sm: '25rem', md: '40rem', lg: '53rem' },
  backgroundColor: '#fff',
  borderRadius: 1,
  boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
  transition: '0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
};

// Reusable card component
const InfoCard = ({ item, buttonLabel, details, cardExtraSx = {} }) => (
  <Grid item xs={12} sm={6} md={6}>
    <Card sx={{ ...commonCardSx, ...cardExtraSx }}>
      <CardMedia
        component="img"
        height="160"
        image={item.image}
        alt={item.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: '#333' }}>
            {item.title}
          </Typography>
          <Chip 
            label={item.category} 
            size="small" 
            sx={{ backgroundColor: '#FF9933', color: '#333' }} 
          />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {item.description}
        </Typography>
        {details}
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
        <Button size="small" variant="contained" sx={{ bgcolor: '#138808', color: 'white', '&:hover': { bgcolor: '#0e6e06' } }}>
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  </Grid>
);

function ProgramsEventsSchemes() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Tab configuration with corresponding details render functions and extra card styles
  const tabData = [
    {
      label: "कार्यक्रम (Programs)",
      icon: <VolunteerActivismIcon />,
      items: programs,
      buttonLabel: "अधिक जानें (Learn More)",
      renderDetails: (item) => (
        <>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <CalendarMonthIcon fontSize="small" sx={{ mr: 1, color: '#666' }} />
            <Typography variant="body2" color="text.secondary">
              {item.date}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon fontSize="small" sx={{ mr: 1, color: '#666' }} />
            <Typography variant="body2" color="text.secondary">
              {item.location}
            </Typography>
          </Box>
        </>
      ),
      cardExtraSx: { margin: 'auto' }
    },
    {
      label: "आयोजन (Events)",
      icon: <CelebrationIcon />,
      items: events,
      buttonLabel: "पंजीकरण करें (Register)",
      renderDetails: (item) => (
        <>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <CalendarMonthIcon fontSize="small" sx={{ mr: 1, color: '#666' }} />
            <Typography variant="body2" color="text.secondary">
              {item.date}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon fontSize="small" sx={{ mr: 1, color: '#666' }} />
            <Typography variant="body2" color="text.secondary">
              {item.location}
            </Typography>
          </Box>
        </>
      ),
      cardExtraSx: {}
    },
    {
      label: "योजनाएँ (Schemes)",
      icon: <EventIcon />,
      items: schemes,
      buttonLabel: "आवेदन करें (Apply Now)",
      renderDetails: (item) => (
        <>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <PeopleIcon fontSize="small" sx={{ mr: 1, color: '#666' }} />
            <Typography variant="body2" color="text.secondary">
              <strong>पात्रता (Eligibility):</strong> {item.eligibility}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CalendarMonthIcon fontSize="small" sx={{ mr: 1, color: '#666' }} />
            <Typography variant="body2" color="text.secondary">
              <strong>अंतिम तिथि (Deadline):</strong> {item.deadline}
            </Typography>
          </Box>
        </>
      ),
      cardExtraSx: {}
    }
  ];

  return (
    <Container sx={{ width: "75%", bgcolor: '#f8f8f8', pt: 2, pb: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '250px', sm: '325px', md: '400px' },
          width: 1,
          mx: 'auto',
          backgroundImage: `url(${programsHeroImage})`,
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
        }}
      >
        <Box sx={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1, fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' } }}>
            ग्रामीण विकास
          </Typography>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'medium', fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' } }}>
            Programs, Events & Schemes for Rural Development
          </Typography>
        </Box>
      </Box>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            '& .MuiTab-root': {
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              fontWeight: 'medium',
            }
          }}
        >
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              icon={tab.icon}
              iconPosition="start"
              label={tab.label}
              id={`tab-${index}`}
            />
          ))}
        </Tabs>
      </Box>

      {/* Tab Panels */}
      {tabData.map((tab, index) => (
        <Box key={index} role="tabpanel" hidden={tabValue !== index}>
          {tabValue === index && (
            <Grid container spacing={3} justifyContent="center">
              {tab.items.map((item, idx) => (
                <InfoCard 
                  key={idx} 
                  item={item} 
                  buttonLabel={tab.buttonLabel} 
                  details={tab.renderDetails(item)}
                  cardExtraSx={tab.cardExtraSx}
                />
              ))}
            </Grid>
          )}
        </Box>
      ))}
    </Container>
  );
}

export default ProgramsEventsSchemes;
