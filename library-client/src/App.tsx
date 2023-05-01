import React, { useState  } from 'react';
import './App.css';

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
    <>
      <div>Here will be my app</div>
      <button onClick={fetchBooks}>Fetch</button>
      {
        books.map((el: any,i: any) => {
          return (
            <ul key={i}>
              <li>{el.author}</li>
              <li>{el.title}</li>
              <li>{el.language}</li>
            </ul>
          )
        })
      }
    </>
  );
}

export default App;
