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
import { EmojiEvents, Business, CalendarToday } from '@mui/icons-material';
import SectionHeader from '../components/SectionHeader';
import { achievements } from '../data/achievements';

const Achievements = () => {
  return (
    <Box component="section" py={8} id="achievements" sx={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
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
        background: 'url("data:image/svg+xml,%3Csvg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23e8f5e8" fill-opacity="0.1" fill-rule="evenodd"%3E%3Ccircle cx="17.5" cy="17.5" r="2"/%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.6,
      }
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4, lg: 6 }, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Achievements & Certifications"
          subtitle="Recognition and professional development"
        />
        <Grid container spacing={4} justifyContent="center">
          {achievements.map((achievement) => (
            <Grid item key={achievement.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: 300,
                  height: 400,
                  textAlign: 'center',
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
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        backgroundColor: 'primary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <EmojiEvents sx={{ fontSize: 32, color: 'primary.contrastText' }} />
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      lineHeight: 1.3,
                      mb: 2,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {achievement.title}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                    <Business sx={{ fontSize: 16, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      {achievement.issuer}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
                    <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {achievement.date}
                    </Typography>
                  </Box>

                  {achievement.description && (
                    <>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="body2" sx={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                        {achievement.description}
                      </Typography>
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Achievements;
