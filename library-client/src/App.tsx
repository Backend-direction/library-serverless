
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { MsalAuthenticationTemplate, MsalProvider, UnauthenticatedTemplate } from '@azure/msal-react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from './config/theme/light-theme';
import Layout from './pages/Layout/LayoutPage';
import { loginRequest } from './auth/auth.config';
import Spinner from './components/Spinner/Spinner';
import { Box, Container } from '@mui/material';

function App({ instance }: { instance: PublicClientApplication}) {
  const authRequest = {
    ...loginRequest,
  };
  
  return (
    <MsalProvider instance={instance}>
      <ThemeProvider theme={lightTheme}>
        <MsalAuthenticationTemplate 
          interactionType={InteractionType.Redirect} 
          authenticationRequest={authRequest}
        >
          <Layout />
        </MsalAuthenticationTemplate>
        <UnauthenticatedTemplate>
          <Box sx={{ background: '#275EFE', width: '100vw', height: '100vh' }}>
            <Spinner />
          </Box>
        </UnauthenticatedTemplate>
      </ThemeProvider>
    </MsalProvider>
  );
}

export default App;
