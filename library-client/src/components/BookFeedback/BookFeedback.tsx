import { FunctionComponent } from "react";
import { Box, Button, Rating, Typography } from "@mui/material";

import Feedback from '../Feedback/Feedback';

interface BookFeedbackProps {
  
}
 
const BookFeedback: FunctionComponent<BookFeedbackProps> = () => {
  return ( 
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Typography>Feedback</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Rating name="read-only" value={5} readOnly size="small" />
          <Typography component="legend">2 fedback(s)</Typography>
        </Box>
      </Box>
      <Button fullWidth variant="outlined">
        Give a feedback
      </Button>
      {
        feedbacks.map(feedback => <Feedback feedback={feedback}/>)
      }
    </>
   );
}
 
export default BookFeedback;

// Mock date until api will be ready
const feedbacks = [
  {
    id: '11111',
    name: 'Joe Dow',
    date: '16 of June',
    description: 'Fantastic book with immersive plot. Author was able to build a suspence and you dont know who is teh killer till the end',
    title: 'My recommendation',
    rate: 5
  },
  {
    id: '22222',
    name: 'Dr. Haus',
    date: '10 of May',
    description: 'Fantastic book with immersive plot. Author was able to build a suspence and you dont know who is teh killer till the end',
    title: 'My opinion',
    rate: 5
  }
]