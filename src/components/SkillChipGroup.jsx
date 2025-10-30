import React from 'react';
import { Box, Chip, Typography, LinearProgress } from '@mui/material';

const SkillChipGroup = ({ category, items }) => {
  return (
    <Box mb={4} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        {category}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
        {items.map((skill, index) => (
          <Box key={index} sx={{ width: '100%', maxWidth: 200 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Chip label={skill.name} size="small" />
              <Typography variant="body2" color="text.secondary">
                {skill.level}%
              </Typography>
            </Box>
            <LinearProgress variant="determinate" value={skill.level} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SkillChipGroup;
