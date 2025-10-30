import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Chip,
  Typography,
} from '@mui/material';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Get unique tags for filter chips
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];

  // Filter projects based on selected tag
  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(selectedFilter));

  return (
    <Box component="section" py={8} id="projects" sx={{
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
        background: 'url("data:image/svg+xml,%3Csvg width="45" height="45" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23fff3e0" fill-opacity="0.1" fill-rule="evenodd"%3E%3Ccircle cx="22.5" cy="22.5" r="2"/%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.5,
      }
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4, lg: 6 }, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Projects"
          subtitle="Some of my recent work"
        />
        <Box
          sx={{
            mb: 4,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            justifyContent: 'center',
          }}
        >
          {allTags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              onClick={() => setSelectedFilter(tag)}
              variant={selectedFilter === tag ? 'filled' : 'outlined'}
              color={selectedFilter === tag ? 'primary' : 'default'}
              sx={{
                cursor: 'pointer',
                fontWeight: selectedFilter === tag ? 600 : 400,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
          ))}
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {filteredProjects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
        {filteredProjects.length === 0 && (
          <Typography variant="body1" color="text.secondary" textAlign="center" mt={4}>
            No projects found for the selected filter.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Projects;
