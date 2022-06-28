import React, { useMemo } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { styled } from '@mui/system';
import { Drawer } from '@mui/material';
import Card from './Card/Card';
import fetchMinifigs from '../intefaces/fetchMinifigs';
import { MinifigInterface } from '../intefaces/Minifig.interface';
import { CommonResponse } from '../intefaces/Common.interface';
import SummarizeList from './summarizeList/SummarizeList';
import fetchMinifigParts from '../intefaces/fetchMinifigParts';
import { MinifigPartsResult } from '../intefaces/MinifigParts.interface';

interface IRenderCardsProps {
  minifigs: MinifigInterface[] | null;
  onCardClickCallback: Function;
}

const StyledContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '100%',
  marginTop: '10%',
});

const RenderCards = ({
  minifigs,
  onCardClickCallback,
}: IRenderCardsProps): JSX.Element | null => {
  if (minifigs == null) {
    return null;
  }
  return (
    <>
      {minifigs.map((minifig, key) => (
        <Card
          onClickHandler={onCardClickCallback}
          order={key}
          minifig={minifig}
          key={minifig.set_num}
        />
      ))}
    </>
  );
};

const filterRandomElements = (elements: MinifigInterface[]) =>
  // eslint-disable-next-line max-len
  elements
    .sort(() => Math.random() - Math.random())
    .slice(0, Number(process.env.REACT_APP_API_ELEMENTS_TO_PICK));

const ChooseMinifigs: React.FC = () => {
  const [minifigs, setMinifigs] = React.useState<MinifigInterface[] | null>(
    null
  );
  const [selectedMinifig, setSelectedMinifig] =
    React.useState<MinifigInterface | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  const [minifigsParts, setMinifigsParts] = React.useState<
    MinifigPartsResult[] | null
  >(null);

  const {
    data: minifigsData,
  }: UseQueryResult<CommonResponse<MinifigInterface>, Error> = useQuery(
    'minifigs',
    fetchMinifigs,
    {
      enabled: minifigs === null,
    }
  );

  // @todo: remove condition from queryKey

  const {
    data: minifigParts,
  }: UseQueryResult<CommonResponse<MinifigPartsResult>, Error> = useQuery(
    ['minifigParts', selectedMinifig?.set_num || ''],
    fetchMinifigParts,
    {
      enabled: selectedMinifig?.set_num !== undefined,
      staleTime: 10000000,
    }
  );

  useMemo(
    () =>
      minifigsData?.results &&
      setMinifigs(filterRandomElements(minifigsData?.results)),
    [minifigsData]
  );

  useMemo(
    () => minifigParts?.results && setMinifigsParts(minifigParts?.results),
    [minifigParts]
  );

  const onMinifigSelectCallback = (minifig: MinifigInterface) => {
    setSelectedMinifig(minifig);
    setIsDrawerOpen(true);
  };

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return false;
    }
    return setIsDrawerOpen(open);
  };

  return (
    <StyledContainer>
      <RenderCards
        onCardClickCallback={onMinifigSelectCallback}
        minifigs={minifigs}
      />
      <Drawer anchor='right' onClose={toggleDrawer(false)} open={isDrawerOpen}>
        <SummarizeList
          minifigsParts={minifigsParts}
          minifig={selectedMinifig}
        />
      </Drawer>
    </StyledContainer>
  );
};
export default ChooseMinifigs;
