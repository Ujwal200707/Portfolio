import React from 'react';
import { Typography, Box } from '@mui/material';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <Box textAlign="center" mb={4}>
      <Typography variant="h2" component="h2" gutterBottom>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h5" component="p" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
