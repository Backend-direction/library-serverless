import { FunctionComponent, useState } from "react";
import { Stack, Divider, Typography, styled, Link } from "@mui/material";
import Box from '@mui/material/Box';
import { IBook } from "../../interfaces/IBook";

interface BookPropertiesProps {
  book: IBook
}

const Item = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled(Box)`
  &.short {
    height: 200px;
    overflow: hidden;
  }
`
 
const BookProperties: FunctionComponent<BookPropertiesProps> = ({ book }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  }

  return (
    <>
      <Wrapper className={isOpen ? 'full' : 'short'}>
      <Typography variant="h6" sx={{ marginBottom: '10px' }}>
        Properties
      </Typography>
      <Stack
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        <Item>
          <Typography variant="body1">
            Title
          </Typography>
          <Typography variant="body1">{book.title}</Typography>
        </Item>
        <Item>
          <Typography variant="body1">
            Author
          </Typography>
          <Typography variant="body1">{book.author}</Typography>
        </Item>
        <Item>
          <Typography variant="body1">
            Language
          </Typography>
          <Typography variant="body1">{book.language}</Typography>
        </Item>
        <Item>
          <Typography variant="body1">
            Pages
          </Typography>
          <Typography variant="body1">{book.pages}</Typography>
        </Item>
        <Item>
          <Typography variant="body1">
            Year
          </Typography>
          <Typography variant="body1">{book.year}</Typography>
        </Item> 
        <Item>
          <Typography variant="body1">
            Genre
          </Typography>
          <Typography variant="body1">{book.genre}</Typography>
        </Item>
        <Item>
          <Typography variant="body1">
            Wikipedia
          </Typography>
          <Link href="{book.link}" underline="none">Wikipedia link</Link>
        </Item>
      </Stack>
    </Wrapper>
      <Link
        component="button"
        variant="subtitle2"
        underline="none"
        onClick={handleClick}
        sx={{'margin-top': '10px'}}
      >
        { isOpen ? 'Less details' :  'More details' }
      </Link>
    </> 
    
   );
}
 
export default BookProperties;