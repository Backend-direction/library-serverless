import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import BookPreview from "../../components/BookPreview/BookPreview";
import BookDescription from "../../components/BookDescription/BookDescription";
import { useQuery } from "@tanstack/react-query";
import { fetchBook } from "../../services/book";
import Spinner from "../../components/Spinner/Spinner";

const BookDetailsPage = () => {
  const { bookId, partionId } = useParams();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['book'],
    queryFn: () => fetchBook(bookId, partionId),
  });

  if(isLoading) return <Spinner />

  if(isError) return <div>Opps something went wrong</div>

  return (
    <Box m={8}>
      <Grid container spacing={4} >
        <Grid xs={4}>
          <BookPreview book={data}/>
        </Grid>
        <Grid xs={8}>
          <BookDescription book={data}/>
        </Grid>
      </Grid>
    </Box>
   );
}
 
export default BookDetailsPage;