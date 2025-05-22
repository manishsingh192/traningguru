import React from 'react';
import { Box, Typography, Grid, Avatar, useTheme } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import InfoCards from './InfoCard';      // ms.................

const contactOptions = [
  {
  icon: <ChatBubbleOutlineIcon />,
  title: 'Chat with us',
  description: (
    <>
      Have a real-time conversation  <br />
      with
      one of our customer support <br /> experts.
    </>
  ),
},
  {
  icon: <ForumOutlinedIcon />,
  title: 'Ask the community',
  description: (
    <>
      Take a look at our community  <br />
    
      forums and interact with fellow<br /> users.
    </>
  ),
},
  {
  icon: <SupportAgentOutlinedIcon />,
  title: 'Support center',
  description: (
    <>
      Peruse the frequently asked  <br />
    
      questions and support<br /> 
      documentation in order to locate <br />
      resolutions.
    </>
  ),
},
  {
  icon: <PhoneOutlinedIcon />,
  title: 'Call us',
  description: (
    <>
      Please contact us by phone<br />
    
   within our regular operating<br /> 
       hours.
    </>
  ),
},
];

const ContactUs = () => {
  const theme = useTheme();

  return (
    <>
    <Box>
      {/* Blue Background with Curved Bottom */}
      <Box
        sx={{
          backgroundColor: '#0B72FF',
          color: 'white',
          pt: 10,
          pb: 12,
          textAlign: 'center',
          borderBottomLeftRadius: '50% 20%',
          borderBottomRightRadius: '70% 20%',
        }}
      >
        <Typography variant="h3" fontWeight="bold" mt={5}>
          Contact us
        </Typography>
        <Typography variant="subtitle1" mt={2} sx={{ color: 'rgba(255,255,255,0.8)' }}>
          Have questions? We're here to help!
        </Typography>
      </Box>

      {/* 4 Cards in One Row */}
      <Box sx={{ py: 5, backgroundColor: '#fff', overflowX: 'auto' }}>
        <Grid container wrap="nowrap" spacing={1} sx={{ px: 3 }}>
          {contactOptions.map((option, index) => (
            <Grid
              key={index}
              item
              sx={{
                flex: '0 0 25%',
                minWidth: 250,
                textAlign: 'center',
              }}
            >
              <Avatar
                sx={{
                  bgcolor: '#2E88FF',
                  width: 56,
                  height: 56,
                  margin: '0 auto',
                  mb: 2,
                }}
              >
                {option.icon}
              </Avatar>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {option.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {option.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    <InfoCards />          

    </>
  );
};

export default ContactUs;
