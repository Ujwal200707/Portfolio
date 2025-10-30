import React from 'react';
import { Box, Container } from '@mui/material';
import SectionHeader from '../components/SectionHeader';
import SkillChipGroup from '../components/SkillChipGroup';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <Box component="section" py={8} id="skills" sx={{
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
        background: 'url("data:image/svg+xml,%3Csvg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23e8f5e8" fill-opacity="0.1" fill-rule="evenodd"%3E%3Ccircle cx="25" cy="25" r="3"/%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.4,
      }
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4, lg: 6 }, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Technologies I work with"
        />
        {skills.map((skillGroup, index) => (
          <SkillChipGroup
            key={index}
            category={skillGroup.category}
            items={skillGroup.items}
          />
        ))}
      </Container>
    </Box>
  );
};

export default Skills;
