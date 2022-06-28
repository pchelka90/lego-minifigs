import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import { Fade, Typography } from '@mui/material';
import { MinifigInterface } from '../../intefaces/Minifig.interface';

const StyledCard = styled('div')({
  width: 350,
  height: 380,
  color: '#000',
  backgroundColor: '#fff',
  borderRadius: 20,
  boxShadow: 'inset 0 0 5px #EEBC1D',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  textAlign: 'center',
  '&:hover': {
    border: '8px solid #fa8a0a',
    transform: 'translateY(-4px)',
  },
});

const StyledImagePreview = styled('img')({
  width: '50%',
  height: 'auto',
  marginBottom: 50,
  marginTop: 30,
  borderRadius: 10,
});

interface IProps {
  minifig: MinifigInterface;
  order: number;
  onClickHandler: Function;
}

const Card = ({ minifig, order, onClickHandler }: IProps) => {
  const [fadeIn, setFadeIn] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 500 * (+ 1));
  }, []);

  return (
    <Fade in={fadeIn} timeout={1000}>
      <StyledCard onClick={() => onClickHandler(minifig)}>
        <div>
          <StyledImagePreview alt='minifig-preview' src={minifig.set_img_url} />
          <Typography style={{ margin: '0 10px' }}>{minifig.name}</Typography>
          <Typography
            style={{
              color: '#fa8a0a',
              marginTop: '10px',
            }}
          >
            Show details
          </Typography>
        </div>
      </StyledCard>
    </Fade>
  );
};
export default Card;
