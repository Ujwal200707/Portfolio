import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
} from '@mui/material';
import { FormatQuote, Person, Business } from '@mui/icons-material';
import SectionHeader from '../components/SectionHeader';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <Box component="section" py={8} id="testimonials" sx={{
      backgroundColor: 'background.paper',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23f3e5f5" fill-opacity="0.1" fill-rule="evenodd"%3E%3Ccircle cx="20" cy="20" r="2"/%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.5,
      }
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4, lg: 6 }, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Testimonials"
          subtitle="What others say about working with me"
        />
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial) => (
            <Grid item key={testimonial.id} xs={12} md={6}>
              <Card
                sx={{
                  width: 300,
                  height: 400,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: (theme) => theme.shadows[8],
                    borderColor: 'primary.main',
                  },
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                  },
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        mb: 2,
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: 'primary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Person sx={{ fontSize: 24, color: 'primary.contrastText' }} />
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {testimonial.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                        <Business sx={{ fontSize: 14, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role} at {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Divider sx={{ mb: 2 }} />

                  <Box sx={{ position: 'relative', textAlign: 'center' }}>
                    <FormatQuote
                      sx={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        transform: 'translateX(-50%)',
                        color: 'primary.main',
                        fontSize: 24,
                        opacity: 0.6,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: 'italic',
                        lineHeight: 1.6,
                        fontSize: '0.95rem',
                        color: 'text.primary',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        pt: 3,
                      }}
                    >
                      "{testimonial.quote}"
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
