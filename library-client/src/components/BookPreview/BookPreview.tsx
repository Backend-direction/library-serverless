import { Chip } from "@mui/material";
import { IBook } from "../../interfaces/IBook";
import buildImgLink from '../../utils/build-img-link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Grid from '@mui/material/Unstable_Grid2';
 
const BookPreview = ({ book } : { book: IBook }) => {
  return ( 
      <Grid container spacing={3}>
         <Grid>
            <Chip
               icon={<FavoriteBorderIcon />}
               clickable
               sx={{
                  width: '54px',
                  height: '40px',
                  paddingLeft: '10px'
               }}
            />
         </Grid>
         <Grid>
            <Chip
               icon={<MenuBookIcon />}
               clickable
               sx={{
                  width: '54px',
                  height: '40px',
                  paddingLeft: '10px'
               }}
            />
         </Grid>
         <Grid>
            <Chip
               label='Read demo'
               clickable
               sx={{
                  height: '40px',
               }}
            />
         </Grid>
         <img 
            src={buildImgLink(book.imageLink)}
            alt={book.title}
            style={{ borderRadius: '10px' }}
         />
      </Grid>
   );
}
 
export default BookPreview;