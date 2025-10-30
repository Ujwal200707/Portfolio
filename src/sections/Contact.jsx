import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
} from '@mui/material';
import { GitHub, LinkedIn, Email, Twitter } from '@mui/icons-material';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/username', label: 'GitHub' },
    { icon: <LinkedIn />, url: 'https://linkedin.com/in/username', label: 'LinkedIn' },
    { icon: <Email />, url: 'mailto:alex@example.com', label: 'Email' },
    { icon: <Twitter />, url: 'https://twitter.com/username', label: 'Twitter' },
  ];

  return (
    <Box component="section" py={8} id="contact" sx={{
      backgroundColor: 'background.paper',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23fce4ec" fill-opacity="0.1" fill-rule="evenodd"%3E%3Ccircle cx="19" cy="19" r="2"/%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.5,
      }
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4, lg: 6 }, position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's work together"
        />
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Let's Connect
            </Typography>
            <Typography variant="body1" paragraph>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question, want to collaborate, or just want to say hi,
              feel free to reach out!
            </Typography>
            <Typography variant="body1" paragraph>
              Currently open to internships, freelance projects, and full-time roles.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" component="h4" gutterBottom>
                Find me on:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((link, index) => (
                  <IconButton
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    size="large"
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
