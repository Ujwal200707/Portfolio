import React from 'react';
import {
  Box,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip,
} from '@mui/material';
import { ExpandMore, Work, School } from '@mui/icons-material';
import SectionHeader from '../components/SectionHeader';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <Box component="section" py={8} id="experience" sx={{
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
        background: 'url("data:image/svg+xml,%3Csvg width="55" height="55" viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23fce4ec" fill-opacity="0.1" fill-rule="evenodd"%3E%3Ccircle cx="27.5" cy="27.5" r="2"/%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.4,
      }
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4, lg: 6 }, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Experience & Education"
          subtitle="My professional journey"
        />
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {experience.map((item, index) => (
            <Accordion key={index} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                  {item.role.includes('Student') ? <School /> : <Work />}
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h3">
                      {item.role}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {item.organization} • {item.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.startDate} - {item.endDate}
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box component="ul" sx={{ pl: 2 }}>
                  {item.description.map((desc, descIndex) => (
                    <Typography key={descIndex} component="li" variant="body1" paragraph>
                      {desc}
                    </Typography>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
