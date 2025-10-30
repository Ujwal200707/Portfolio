import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
} from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { text: 'About', href: '#about' },
    { text: 'Skills', href: '#skills' },
    { text: 'Projects', href: '#projects' },
    { text: 'Experience', href: '#experience' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <Box component="footer" sx={{
      py: 4,
      backgroundColor: 'background.paper',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23e3f2fd" fill-opacity="0.1" fill-rule="evenodd"%3E%3Ccircle cx="15" cy="15" r="1"/%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.3,
      }
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4, lg: 6 }, position: 'relative', zIndex: 1 }}>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Deevi Ujwal. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, mt: { xs: 2, md: 0 } }}>
            {quickLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                color="text.secondary"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                {link.text}
              </Link>
            ))}
          </Box>
        </Box>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block', textAlign: 'center' }}>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
