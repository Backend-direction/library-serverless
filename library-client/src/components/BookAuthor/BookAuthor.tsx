import { FunctionComponent } from "react";
import { Avatar, Typography, Box, Link } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface BookAuthorProps {
  biography: string;
}
 
const BookAuthor: FunctionComponent<BookAuthorProps> = ({ biography }) => {
  return (
    <>
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>
        About author
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Typography variant="body2" sx={{ textAlign: 'justify', marginRight: '20px' }}>
          { biography }
        </Typography>
        <Avatar 
          src="/broken-image.jpg"
          sx={{ width: 70, height: 70 }}
        />
      </Box>
      <Link href="#" underline="none">
        <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          More details about author <ArrowForwardIosIcon fontSize="inherit" />
        </Typography>
      </Link>
    </>
    );
}
 
export default BookAuthor;