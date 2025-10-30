import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Button,
  Box,
  Divider,
} from '@mui/material';
import { GitHub, Launch, Group } from '@mui/icons-material';

const ProjectCard = ({ project }) => {
  return (
    <Card
      sx={{
        width: 300,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.02)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
          borderColor: 'primary.main',
        },
        borderRadius: 3,
        border: '1px solid rgba(255,255,255,0.2)',
        background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        overflow: 'hidden',
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
      <CardContent sx={{ flexGrow: 1, p: 3, pb: 2, textAlign: 'center' }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: 'text.primary',
            fontSize: '1.25rem',
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          paragraph
          sx={{
            lineHeight: 1.6,
            mb: 3,
            fontSize: '0.9rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {project.summary}
        </Typography>

        {/* Project Details */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
          <Group sx={{ fontSize: 18, color: 'primary.main' }} />
          <Typography variant="body2" color="text.primary" sx={{ fontWeight: 500 }}>
            {project.role}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, justifyContent: 'center' }}>
          {project.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{
                backgroundColor: 'primary.light',
                color: 'primary.contrastText',
                fontWeight: 500,
                fontSize: '0.7rem',
                height: 24,
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: 'primary.main',
                },
              }}
            />
          ))}
        </Box>
      </CardContent>

      <Divider sx={{ mx: 3 }} />

      <CardActions sx={{ p: 3, pt: 2, justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
          {project.links.demo && (
            <Button
              size="small"
              variant="contained"
              startIcon={<Launch />}
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.8rem',
                px: 2,
                py: 0.75,
                flex: 1,
                maxWidth: '120px',
              }}
            >
              Demo
            </Button>
          )}
          {project.links.repo && (
            <Button
              size="small"
              variant="outlined"
              startIcon={<GitHub />}
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.8rem',
                px: 2,
                py: 0.75,
                flex: 1,
                maxWidth: '120px',
              }}
            >
              Code
            </Button>
          )}
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
