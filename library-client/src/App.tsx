
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { MsalAuthenticationTemplate, MsalProvider, UnauthenticatedTemplate } from '@azure/msal-react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from './config/theme/theme';
import { loginRequest } from './auth/auth.config';
import Spinner from './components/Spinner/Spinner';
import { Box } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes'
import { useState, useMemo } from 'react';
import { ColorModeContext } from './config/theme/themeContext';

function App({ instance }: { instance: PublicClientApplication}) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () => mode === 'light' ? lightTheme : darkTheme,
    [mode],
  );

  const authRequest = {
    ...loginRequest,
  };
  
  return (
    <MsalProvider instance={instance}>
       <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <MsalAuthenticationTemplate 
            interactionType={InteractionType.Redirect} 
            authenticationRequest={authRequest}
          >
            <RouterProvider router={router} />
          </MsalAuthenticationTemplate>
          <UnauthenticatedTemplate>
            <Box sx={{ background: '#275EFE', width: '100vw', height: '100vh' }}>
              <Spinner />
            </Box>
          </UnauthenticatedTemplate>
        </ThemeProvider>
       </ColorModeContext.Provider>
    </MsalProvider>
  );
}

export default App;
