import React from 'react';
import { styled } from '@mui/system';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { MinifigInterface } from '../../intefaces/Minifig.interface';
import { MinifigPartsResult } from '../../intefaces/MinifigParts.interface';

interface IProps {
  minifig: MinifigInterface | null;
  minifigsParts: MinifigPartsResult[] | null;
}

interface IRenderListDetail {
  label: string;
  value: string | number;
}

const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '100%',
  padding: '0 50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
}));

const StyledListContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  height: 'auto',
  width: '400px',
});

const StyledPartComponent = styled('div')({
  textAlign: 'center',
  margin: '10px 0',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const StyledImg = styled('img')({
  width: 50,
  height: 50,
  marginRight: 20,
});

const StyledPartsListContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
});

const RenderListDetail = ({ label, value }: IRenderListDetail) => (
  <StyledListContainer>
    <Typography variant='h5'>{label}</Typography>
    <Typography>{value}</Typography>
  </StyledListContainer>
);

const mapPartsListToComponent = (partsList: MinifigPartsResult[] | null) => {
  if (partsList === null) return null;

  return (
    <>
      {partsList.map((part) => (
        <StyledPartComponent key={part.element_id}>
          <StyledImg alt='parts' src={part.part.part_img_url} />
          <Typography>
            {part.quantity}x{part.part.part_num}
          </Typography>
        </StyledPartComponent>
      ))}
    </>
  );
};

const SummarizeList = ({ minifig, minifigsParts }: IProps) => {
  if (!minifig) return null;
  return (
    <StyledContainer>
      <RenderListDetail label='Name' value={minifig?.name} />
      <RenderListDetail label='Minifig number' value={minifig?.set_num} />
      <RenderListDetail label='Parts' value={minifig?.num_parts} />
      <StyledPartsListContainer>
        {mapPartsListToComponent(minifigsParts)}
      </StyledPartsListContainer>
      <Link state={{ minifig }} to='/summary'>
        <Button color='secondary' variant='contained'>
          Purchase
        </Button>
      </Link>
    </StyledContainer>
  );
};

export default SummarizeList;
