import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { MinifigInterface } from '../../intefaces/Minifig.interface';

interface IProps {
  minifig: MinifigInterface;
}

const StyledContainer = styled('div')({
  display: 'inline',
  marginTop: 60,
});

const StyledImg = styled('img')({
  width: 200,
  height: 200,
  marginRight: 100,
  marginTop: 80,
});

const OrdersList = ({ minifig }: IProps) => (
  <StyledContainer>
    <StyledImg alt='minifig-preview' src={minifig.set_img_url} />
    <div>
      <Typography variant='h6'>{minifig.name}</Typography>
      <Typography variant='subtitle1'>Parts: {minifig.num_parts}</Typography>
    </div>
  </StyledContainer>
);

export default OrdersList;
