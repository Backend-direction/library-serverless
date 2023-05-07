import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { IBook } from "../../interfaces/IBook";

interface BookProps {
  book: IBook,
};
 
const Book = ({ book }: BookProps) => {
  console.log(book)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={book.imageLink}
          alt={book.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author: {book.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Language: {book.language}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
 
export default Book;