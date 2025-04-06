import { Box, Container, Typography, Link as MLink } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


export default function NotFound() {
  return (
    <Container sx={{textAlign:"center", mt:4}}>
        <Box >
            <Typography variant='h1'>Error: 404</Typography>
            <Typography variant='h3'>Page Not Found</Typography>
            <MLink><Link to="/">Go back to home</Link></MLink>
        </Box>
    </Container>
  )
}
