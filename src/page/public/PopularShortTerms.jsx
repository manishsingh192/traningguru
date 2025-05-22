import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const PopularShortTerms = () => {
  return (
    <Box textAlign="center" py={5}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Our Popular Short Terms Courses
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        These courses are in high demand in industry
      </Typography>

      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 3, textTransform: 'none', fontWeight: 'bold' }}
      >
        See All Courses
      </Button>
    </Box>
  );
};

export default PopularShortTerms;
