import { createTheme } from '@mui/material/styles';
import darkBackgroundImage from '../../assets/img/background-dark.jpeg';

const themeDark = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#2196f3',
    },
    text: {
      primary: '#fff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${darkBackgroundImage})`,
          backgroundSize: 'cover',
          transition: '1s',
          height: '100%',
        },
      },
    },
  },
});

export default themeDark;
