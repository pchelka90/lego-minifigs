import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledContainer = styled('div')({
  textTransform: 'uppercase',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '60%',
  whiteSpace: 'nowrap',
  textAlign: 'center',
});

const Home = () => (
  <StyledContainer>
    <Typography variant='h4' mb={-30}>
      Lego Minifigs Mystery Box
    </Typography>
    <Link to='/chooseMinifig'>
      <Button
        sx={{
          backgroundColor: '#2196f3',
          borderRadius: '16px',
          width: '40%',
          height: '150%',
          marginTop: '-100px',
          '&:hover': {
            backgroundColor: '#1769aa',
          },
        }}
        variant='contained'
      >
        Let&apos;s Go!
      </Button>
    </Link>
  </StyledContainer>
);

export default Home;
