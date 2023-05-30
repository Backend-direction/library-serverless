import { useParams } from "react-router-dom";
import { Box, Theme, styled } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import BookPreview from "../../components/BookPreview/BookPreview";
import BookDescription from "../../components/BookDescription/BookDescription";
import { useQuery } from "@tanstack/react-query";
import { fetchBook } from "../../services/book";
import Spinner from "../../components/Spinner/Spinner";
import BookOrderDetails from "./BookOrderDetails/BookOrderDetails";

const Section = styled(Grid)`
  &.deault_order {
    order: 2
  }

  &.reverse_order {
    order: 3
  }
`

const BookDetailsPage = () => {
  const lgAndUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const { bookId, genre } = useParams();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['book'],
    queryFn: () => fetchBook(bookId, genre),
  });

  if(isLoading) return <Spinner />

  if(isError) return <div>Opps something went wrong</div>

  return (
    <Box m={8}>
      <Grid container spacing={2} >
        <Grid lg xs={12}>
          <BookPreview book={data}/>
        </Grid>
        <Section lg={6} xs={12} className={lgAndUp ? 'default_order' : 'reverse_order'}>
          <BookDescription book={data}/>
        </Section>
        <Grid lg xs={12}>
          <BookOrderDetails />
        </Grid>
      </Grid>
    </Box>
   );
}
 
export default BookDetailsPage;