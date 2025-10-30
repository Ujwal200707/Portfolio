import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import SectionHeader from '../components/SectionHeader';

const blogPosts = [
  {
    id: 1,
    title: 'Building Responsive React Components with Material-UI',
    excerpt: 'Learn how to create flexible, mobile-first components using MUI\'s Grid system and responsive utilities.',
    date: '2024-01-15',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Optimizing Web Performance: A Developer\'s Guide',
    excerpt: 'Essential techniques for improving your web application\'s performance, from code splitting to image optimization.',
    date: '2024-01-08',
    readTime: '8 min read',
  },
];

const Blog = () => {
  return (
    <Box component="section" py={8} id="blog" sx={{
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
        background: 'url("data:image/svg+xml,%3Csvg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23e3f2fd" fill-opacity="0.1" fill-rule="evenodd"%3E%3Ccircle cx="21" cy="21" r="2"/%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.4,
      }
    }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4, lg: 6 }, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <SectionHeader
          title="Latest Articles"
          subtitle="Thoughts on web development and technology"
        />
        <Grid container spacing={4} justifyContent="center">
          {blogPosts.map((post) => (
            <Grid item key={post.id} xs={12} md={6}>
              <Card sx={{ width: 300, height: 400, display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {post.excerpt}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {post.date} • {post.readTime}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, pt: 0, textAlign: 'center' }}>
                  <Button
                    size="small"
                    endIcon={<ArrowForward />}
                    sx={{ textTransform: 'none' }}
                  >
                    Read More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
