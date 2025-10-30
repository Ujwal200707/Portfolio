import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import { LocationOn, Work, Language } from '@mui/icons-material';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  const quickFacts = [
    { icon: <LocationOn />, label: 'Location', value: 'Vijayawada, India' },
    { icon: <Work />, label: 'Availability', value: 'Open to opportunities' },
    { icon: <Language />, label: 'Languages', value: 'English, Telugu, Hindi' },
  ];

  return (
    <Box component="section" py={8} id="about" sx={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23e3f2fd" fill-opacity="0.1" fill-rule="evenodd"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.5,
      }
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4, lg: 6 }, position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="About Me"
          subtitle="Get to know me better"
        />
        <Box textAlign="center" mb={4}>
          <Typography variant="body1" paragraph>
            I'm a Computer Science Engineering student at KL University, passionate about building
            innovative solutions that solve real-world problems. I specialize in AI-powered applications,
            full-stack development, and modern web technologies, with a strong focus on creating
            efficient and scalable systems.
          </Typography>
          <Typography variant="body1" paragraph>
            When I'm not coding, you can find me participating in hackathons, contributing to
            open-source projects, or exploring emerging technologies like machine learning and
            cloud computing. I'm always eager to learn and take on new challenges that push
            the boundaries of technology.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
          {quickFacts.map((fact, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {fact.icon}
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {fact.label}
                </Typography>
                <Typography variant="body1" fontWeight="medium">
                  {fact.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
