import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { IBook } from "../../interfaces/IBook";
import Book from "../Book/Book";
import { CircularProgress } from '@mui/material';

interface BookGridProps {
  isLoading: boolean,
  isError: unknown,
  books: IBook[] | undefined,
}
 
const BookGrid = ({ isLoading, isError, books = [] }: BookGridProps) => {

  if(isError) return <div>Opps something went wrong</div>;

  return (
    <Box sx={{ flexGrow: 1 }} pt={5}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          { 
            books.map(book => {
              return (
                <Grid item xs={4} sm={4} md={4} key={book.title}>
                  <Book book={book}/>
                </Grid>
              )
            }) 
          }
      </Grid>
      {isLoading && <CircularProgress />}
    </Box>
   );
}
 
export default BookGrid;