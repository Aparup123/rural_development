import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  TextField,
  CssBaseline
} from '@mui/material';
import {
  ForestOutlined,
  PetsOutlined,
  WaterOutlined,
  AgricultureOutlined,
  VolunteerActivismOutlined,
  LocalFloristOutlined,
  PublicOutlined,
  TrendingUpOutlined,
  EmailOutlined
} from '@mui/icons-material';

// Import all wildlife data
import { 
  conservationProjects, 
  successStories, 
  resourcesList, 
  missionValues, 
  involveItems,
  themeConfig
} from '../components/WildLifeData'; // Adjust the path as necessary

import WildLifeImage from '../assets/images/wildlife_image.jpg'; // Ensure the image is appropriate
// Create theme with configuration from data file
const wildlifeTheme = createTheme({
  palette: {
    primary: themeConfig.colors.primary,
    secondary: themeConfig.colors.secondary,
    success: themeConfig.colors.success,
    background: {
      default: '#f9f9f9',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3.5rem',
      }
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      marginBottom: '1rem'
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.25rem',
      }
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
          }
        }
      }
    }
  }
});

const WildlifeEcologyPage = () => {
  
  // Icon mapping for dynamic rendering
  const IconMap = {
    ForestOutlined,
    PetsOutlined,
    WaterOutlined,
    AgricultureOutlined,
    VolunteerActivismOutlined,
    LocalFloristOutlined,
    PublicOutlined,
    TrendingUpOutlined
  };

  // Helper function to render icons dynamically
  const renderIcon = (iconName, size = 40, color = 'primary.main') => {
    const IconComponent = IconMap[iconName];
    return IconComponent ? <IconComponent sx={{ fontSize: size, color }} /> : null;
  };

  // Reusable section title component
  const SectionTitle = ({ title, subtitle }) => (
    <Box sx={{ mb: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto' }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );

  return (
    <ThemeProvider theme={wildlifeTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mb: 4 , Width: '75%'}}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '60vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url(${WildLifeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'common.white'
        }}
      >
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              py: { xs: 4, md: 8 }, 
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { xs: '100%', md: '60%' },
              padding: { xs: 2, md: 4 },
              
            }}
          >
            <Typography 
              component="h1" 
              variant="h1" 
              gutterBottom
              sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              Wildlife Ecology
            </Typography>
            <Typography 
              variant="h5" 
              paragraph
              sx={{ mb: 4, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
            >
              Empowering Rural Communities Through Conservation and Sustainable Development
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              sx={{ px: 4, py: 1.5 }}
            >
              Join Our Initiative
            </Button>
          </Box>
        </Container>
      </Box>
      </Container>

      {/* Mission Section */}
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <SectionTitle title="Our Mission" />
          <Typography 
            variant="body1" 
            paragraph 
            align="center" 
            sx={{ fontSize: '1.1rem', maxWidth: '800px', mx: 'auto', mb: 4 }}
          >
            We believe in harmonizing ecological conservation with rural development. Our initiatives create sustainable livelihoods while preserving India's rich biodiversity.
          </Typography>
          
          <Grid container spacing={3} justifyContent="center">
            {missionValues.map((value) => (
              <Grid item xs={12} sm={4} key={value.id}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    textAlign: 'center', 
                    p: 3, 
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-5px)' }
                  }}
                >
                  {renderIcon(value.icon, 60)}
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {value.title}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Conservation Projects */}
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg" >
          <SectionTitle 
            title="Conservation Initiatives" 
            subtitle="Our projects bridge traditional ecological knowledge with modern conservation science."
          />

          <Grid container spacing={4} sx={{display:'flex', justifyContent: 'center', alignItems: 'center' }}>
            {conservationProjects.map((project) => (
              <Grid item key={project.id} xs={12} sm={6} md={3}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ mr: 1.5 }}>
                        {renderIcon(project.icon, 30)}
                      </Box>
                      <Typography variant="h6" component="h2" sx={{ mb: 0 }}>
                        {project.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Chip 
                      label={project.location} 
                      size="small" 
                      sx={{ mt: 'auto' }} 
                      color="primary" 
                      variant="outlined" 
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 2 }}>
          Wildlife Conservation Map
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Explore our initiatives across rural India
        </Typography>

        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            height: '500px', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'linear-gradient(45deg, rgba(46,125,50,0.05) 0%, rgba(255,143,0,0.05) 100%)'
          }}
        >
          <MapContainer center={[22.9734, 78.6569]} zoom={5} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Sample Conservation Sites */}
            <Marker position={[26.8467, 80.9462]}>
              <Popup>
                Wildlife Corridor - Uttar Pradesh
              </Popup>
            </Marker>
            <Marker position={[19.076, 72.8777]}>
              <Popup>
                Conservation Project - Maharashtra
              </Popup>
            </Marker>
          </MapContainer>
        </Paper>
      </Container>
    </Box>

      {/* Success Stories */}
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <SectionTitle title="Community Success Stories" />
          
          <Grid container spacing={4} sx={{display:'flex', justifyContent: 'center', alignItems: 'center' }}>
            {successStories.map((story) => (
              <Grid item key={story.id} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={story.image}
                    alt={`${story.village} success story`}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ color: 'primary.dark', mb: 2 }}>
                      {story.village}, {story.state}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 3 }}>
                      {story.achievement}
                    </Typography>
                    <Chip 
                      label={story.impact} 
                      color="success" 
                      variant="outlined"
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Get Involved Section */}
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Paper 
            elevation={3} 
            sx={{ 
              p: { xs: 3, sm: 5 }, 
              background: 'linear-gradient(45deg, rgba(46,125,50,0.05) 0%, rgba(255,143,0,0.05) 100%)'
            }}
          >
            <SectionTitle title="Get Involved" />
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <List>
                  {involveItems.map((item) => (
                    <ListItem key={item.id} sx={{ py: 2 }}>
                      <ListItemIcon>
                        {renderIcon(item.icon, 30)}
                      </ListItemIcon>
                      <ListItemText 
                        primary={<Typography variant="h6" fontSize="1.1rem">{item.title}</Typography>} 
                        secondary={item.description} 
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: { xs: 3, sm: 4 }, bgcolor: 'white' }}>
                  <Typography variant="h6" gutterBottom color="primary.dark">
                    Join Our Newsletter
                  </Typography>
                  <Typography variant="body2" paragraph color="text.secondary" sx={{ mb: 3 }}>
                    Stay updated with our latest initiatives and success stories
                  </Typography>
                  <Box 
                    component="form" 
                    sx={{ 
                      display: 'flex', 
                      flexDirection: { xs: 'column', sm: 'row' },
                      gap: 2
                    }}
                  >
                    <TextField
                      fullWidth
                      placeholder="Your email address"
                      variant="outlined"
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <EmailOutlined color="action" sx={{ mr: 1 }} />
                        )
                      }}
                    />
                    <Button 
                      variant="contained" 
                      color="primary"
                      sx={{ whiteSpace: 'nowrap', width: { xs: '100%', sm: 'auto' } }}
                    >
                      Subscribe
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Resources Section */}
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <SectionTitle 
            title="Educational Resources" 
            subtitle="Discover guides, research, and tools for rural ecological development"
          />
          
          <Grid container spacing={4} sx={{display:'flex', justifyContent: 'center', alignItems: 'center' }}>
            {resourcesList.map((resource) => (
              <Grid item key={resource.id} xs={12} sm={6} md={4}>
                <Button 
                  variant="outlined" 
                  color="primary"
                  fullWidth 
                  sx={{ 
                    p: 3, 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderWidth: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'primary.light',
                      color: 'white',
                      borderColor: 'primary.light',
                      '& svg': {
                        color: 'white'
                      }
                    }
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {renderIcon(resource.icon, 40)}
                  </Box>
                  <Typography variant="h6">
                    {resource.title}
                  </Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box 
        sx={{ 
          textAlign: 'center', 
          py: { xs: 6, md: 10 },
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/api/placeholder/1200/400)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'common.white'
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h4" 
            gutterBottom
            sx={{ fontWeight: 'bold', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
          >
            Together We Can Make a Difference
          </Typography>
          <Typography 
            variant="body1" 
            paragraph
            sx={{ mb: 4, fontSize: '1.1rem', maxWidth: 700, mx: 'auto' }}
          >
            Join us in creating sustainable futures for rural communities and wildlife across India
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            sx={{ px: 4, py: 1.5, fontWeight: 'bold' }}
          >
            Contact Us Today
          </Button>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default WildlifeEcologyPage;