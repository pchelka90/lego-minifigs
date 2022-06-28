import { QueryFunctionContext } from 'react-query';
import { MinifigPartsResult } from './MinifigParts.interface';

const fetchMinifigParts = async ({
  queryKey,
}: QueryFunctionContext<string[]>): Promise<MinifigPartsResult> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/minifigs/${queryKey[1]}/parts/?key=${process.env.REACT_APP_API_KEY}`
  );
  return response.json();
};

export default fetchMinifigParts;
