import { Box, Chip, Link, Typography } from "@mui/material";
import { IBook } from "../../interfaces/IBook";
import Grid from '@mui/material/Unstable_Grid2';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BookDescription = ({ book }: { book : IBook }) => {
  return (
    <Grid container spacing={4} >
      <Grid xs={12}>
        <Typography variant="h5">{book.title}</Typography>
        <Typography variant="caption">{book.author}</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography variant="subtitle2">Type</Typography>
        <Chip
          label='Paper'
          sx={{
            height: '40px',
            width: '100px'
         }}
        />
      </Grid>      
      <Grid xs={12}>
        <Typography variant="subtitle2">Language</Typography>
        <Chip
          label={book.language}
          sx={{
            height: '40px',
            width: '100px'
         }}
        />
      </Grid>
      <Grid xs={12}>
        <Typography variant="subtitle2">Publisher</Typography>
        <Chip
          label={book.country}
          sx={{
            height: '40px',
            width: '100px'
         }}
        />
      </Grid>
      <Grid xs={12}>
        <Typography variant="subtitle2">Publishing year</Typography>
        <Chip
          label={book.year}
          sx={{
            height: '40px',
            width: '100px'
         }}
        />
      </Grid>
      <Grid xs={12}>
        <Link href="#" underline="none">
          <Typography variant="subtitle2">
            Show all options of this publisher <ArrowForwardIosIcon fontSize="small" />
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
}
 
export default BookDescription;