import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CircularProgress } from '@mui/material';
import { InfiniteData } from '@tanstack/react-query';
import { IBook } from "../../interfaces/IBook";
import Book from "../Book/Book";
import React from 'react';
import { IPaginate } from '../../interfaces/IPaginate';

interface BookGridProps {
  isLoading: boolean,
  isError: unknown,
  books: InfiniteData<IPaginate<IBook[]>> | undefined
}
 
const BookGrid = ({ isLoading, isError, books }: BookGridProps) => {

  if(isError) return <div>Opps something went wrong</div>;

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }} pt={5}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {books?.pages?.map(page => (
            <React.Fragment key={page.nextPage}>
              {page.data.map(book => (
                <Grid item xs={4} sm={4} md={4} key={book.title}>
                  <Book book={book}/>
                </Grid>
              ))}
            </React.Fragment>
          ))}
      </Grid>
      {isLoading && <CircularProgress />}
    </Box>
   );
}
 
export default BookGrid;