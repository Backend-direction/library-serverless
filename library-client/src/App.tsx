import React, { useState  } from 'react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from './config/theme/light-theme';
import Layout from './pages/Layout/LayoutPage';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
