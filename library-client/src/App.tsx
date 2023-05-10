
import { MsalAuthenticationTemplate, MsalProvider, UnauthenticatedTemplate } from '@azure/msal-react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from './config/theme/light-theme';
import Layout from './pages/Layout/LayoutPage';
import { loginRequest } from './auth/auth.config';
import { InteractionType } from '@azure/msal-browser';

function App({ instance }: { instance: any}) {
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
          You need to login in order to see the content
        </UnauthenticatedTemplate>
      </ThemeProvider>
    </MsalProvider>
  );
}

export default App;
