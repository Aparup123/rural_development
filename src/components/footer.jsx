import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#333', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{lg:10, xs:2, sm:4, md:6   }} columns={{lg:5}}>
          {/* Logo and Tagline */}
          <Grid item xs={12} md={2}>
            <Box sx={{ display: 'flex',alignItems: 'center', mb: 1 }}>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                
              UpliftIndia
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, display:"flex", flexWrap:"wrap"}} >
              Bridging the gap between rural traditions and contemporary <br></br> advancements for holistic empowerment
            </Typography>
            <Typography variant="caption">
              © 2023 All Rights Reserved
            </Typography>
          </Grid>

          {/* Follow Us */}
          <Grid item xs={12} md={2}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'medium' }}>
              Follow us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <IconButton size="small" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Box>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'medium' }}>
              Call us
            </Typography>
            <Typography variant="body2">
              +91 80085-36680
            </Typography>
          </Grid>

          {/* Product */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'medium' }}>
              Product
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="hover" variant="body2">News</Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">Programs</Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">Education</Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">Wild Lifes</Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">Drinking Water</Link>
            </Box>
          </Grid>

          {/* Use Cases */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'medium' }}>
              Use Cases
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="hover" variant="body2">Web-designers</Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">Marketers</Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">Small Business</Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">Website Builder</Link>
            </Box>
          </Grid>

          {/* Company */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'medium' }}>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="hover" variant="body2">About Us</Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">Careers</Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">FAQs</Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">Teams</Link>
              <Link href="#" color="inherit" underline="hover" variant="body2">Contact Us</Link>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ position: 'relative', mt: 4, pt: 3 }}>
          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 3, 
            mt: 2,
            '& a': { color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }
          }}>
            <Link href="#" color="inherit" variant="body2">Privacy Policy</Link>
            <Link href="#" color="inherit" variant="body2">Terms of Use</Link>
            <Link href="#" color="inherit" variant="body2">Site Map</Link>
          </Box>
          
          
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;