import React, { useState  } from 'react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from './config/theme/light-theme';
import Layout from './pages/Layout/Layout';

function App() {
  const [books, setBooks] = useState<any>([]);

  const fetchBooks = async () =>  {
    const data = await fetch('https://azfnapiservice.azure-api.net/library/api/v1/getBooks?offset=0&limit=10', {
      headers: {
        'Ocp-Apim-Subscription-Key': '81f1522268a34df0b3881d6c5ae1450c'
      }
    });
    const result = await data.json();

    setBooks(result);
  }
  return (
    <ThemeProvider theme={lightTheme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
