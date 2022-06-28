import { MinifigInterface } from './Minifig.interface';

const fetchMinifigs = async (): Promise<MinifigInterface> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/minifigs/?key=${process.env.REACT_APP_API_KEY}&in_theme_id=246`
  );
  return response.json();
};

export default fetchMinifigs;
