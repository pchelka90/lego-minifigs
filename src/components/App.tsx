import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider, QueryClient } from 'react-query';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import ChooseMinifigs from './ChooseMinifigs/ChooseMinifigs';
import Summary from './Summary/Summary';
import themeLight from './theming/lightTheme';
import themeDark from './theming/darkTheme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const RenderRoutes = () => (
  <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/chooseMinifig' element={<ChooseMinifigs />} />
    <Route path='/summary' element={<Summary />} />
    <Route path='/' element={<Navigate to='/home' />} />
  </Routes>
);

const App = () => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(true);

  return (
    <ThemeProvider theme={isDarkModeActive ? themeDark : themeLight}>
      <QueryClientProvider client={queryClient}>
        <Navbar
          isDarkModeActive={isDarkModeActive}
          setIsDarkModeActive={setIsDarkModeActive}
        />
        <CssBaseline />
        <RenderRoutes />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
