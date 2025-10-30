import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Download, Email } from '@mui/icons-material';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV.pdf';
    link.click();
  };

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
        },
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4, lg: 6 }, position: 'relative', zIndex: 1 }}>
        <Box textAlign="center">
          <Typography variant="h1" component="h1" gutterBottom>
            Hi, I'm Deevi Ujwal
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Full Stack Developer
          </Typography>
          <Typography variant="h6" component="p" paragraph sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            Computer Science Engineering student at KL University, passionate about building innovative solutions
            that solve real-world problems. Specializing in AI-powered applications and full-stack development.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<Download />}
              onClick={handleDownloadCV}
              sx={{ backgroundColor: 'rgba(255,255,255,0.2)', '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' } }}
            >
              View CV
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Email />}
              onClick={handleContact}
              sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' } }}
            >
              Contact
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
