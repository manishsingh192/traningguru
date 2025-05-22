import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Container,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import AndroidIcon from '@mui/icons-material/Android';
import MemoryIcon from '@mui/icons-material/Memory';
import LanguageIcon from '@mui/icons-material/Language'; // Added for React course
// import { ReactComponent as MyIcon } from '..//../assets/images/course/rct.svg';




const courses = [
  {
    title: 'Master in Java Development',
     icon: <img src="src/assets/svg/java.svg" alt="icon" width={34} />
  },
  {
    title: 'Master in React Development',
   icon: <img src="src/assets/react.svg" alt="icon" width={34} />
   
  },
  {
    title: 'Master in App Development',
   
    icon: <img src="src/assets/svg/mobileap.svg" alt="icon" width={34} />
  },
  {
    title: 'Master in Python Development',
    icon: <img src="src/assets/svg/python.svg" alt="icon" width={34} />
    
  },
];

const CourseCards = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        py: 5,
        
          px: { xs: 2, sm: 3, md: 12, lg: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Heading Section */}
      

        {/* Cards Section */}
        <Grid container spacing={6} justifyContent="center">
          {courses.map((course, index) => (
            <Grid size={{xs:12, sm:6, md:3}} key={index}>
              <Card

                sx={{
                  
                  // width: '11%',
                  height: 200,
                  textAlign: 'center',
                  p: 1,
                  
                  boxShadow: 2,
                  borderRadius: 2,
                  backgroundColor: '#fff',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: '0.3s',
                  },
                }}
              >
                <CardContent>
                  <Avatar
                    sx={{
                      bgcolor: '#e3f2fd',
                      width: 50,
                      height: 50,
                      mx: 'auto',
                      mb: 1.5,
                    }}
                  >
                    {course.icon}
                  </Avatar>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    {course.title}
                  </Typography>
                  <Button variant="outlined" size="small">
                    View More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box textAlign="center" mt={6}>
          <Typography variant="h4" gutterBottom>
            Our Popular Courses
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            These courses are in high demand in the industry
          </Typography>
          <Button variant="contained" color="primary" size="large">
            See All Courses
          </Button>
        </Box>
    </Box>
  );
};

export default CourseCards;
