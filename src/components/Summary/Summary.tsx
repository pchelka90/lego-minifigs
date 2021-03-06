import React from 'react';
import { useLocation } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { MinifigInterface } from '../Intefaces/Minifig.interface';
import OrdersList from './Orders/Orders';
import ContactForm from './Form/Form';
import { MinifigPartsResult } from '../Intefaces/MinifigParts.interface';

interface Location {
  state: {
    minifig: MinifigInterface;
    minifigsParts: MinifigPartsResult;
  };
}

const StyledContainer = styled(Paper)({
  width: '80%',
  margin: '0 auto',
  padding: 30,
  marginTop: 50,
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'space-around',
});

const Summary = () => {
  const location = useLocation();
  const {
    state: { minifig },
  } = location as Location;

  return (
    <StyledContainer>
      <ContactForm />

      <Typography variant='h5'>SUMMARY</Typography>
      <div>
        <OrdersList minifig={minifig} />
      </div>
    </StyledContainer>
  );
};

export default Summary;
