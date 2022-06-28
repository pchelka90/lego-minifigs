import { createTheme } from '@mui/material/styles';
import lightBackgroundImage from '../assets/img/background-light.jpeg';

const themeLight = createTheme({
  palette: {
    primary: {
      main: 'rgba(0, 0, 0, 0.895)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${lightBackgroundImage})`,
          backgroundSize: 'cover',
          transition: '1s',
          height: '100%',
        },
      },
    },
  },
});

export default themeLight;
