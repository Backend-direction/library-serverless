import { Box, Chip, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { FunctionComponent } from "react";
import Label from "../../../components/Label/Label";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

interface BookOrderDetailsProps {
  
}
 
const BookOrderDetails: FunctionComponent<BookOrderDetailsProps> = () => {
  return ( 
    <Container>
      <Grid2 container spacing={1}>
        <Grid2>
          <Typography variant='h6'>$270</Typography>
        </Grid2>
        <Grid2>
          <Chip label="Sales" color="primary" size="small" />
        </Grid2>
      </Grid2>
      <Grid2 container>
        <Label color="green">
          <LocalShippingIcon fontSize='small'/>
          <Typography variant='body2'>In stock</Typography>
        </Label>
        <Label color="gray">
          <span>•</span>
          <Typography variant='body2'>Paper book</Typography>
        </Label>
      </Grid2>
    </Container>
   );
}
 
export default BookOrderDetails;