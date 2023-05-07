import { Box, styled } from "@mui/material";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../../services/books";
import BookGrid from "../../components/BookGrid/BookGrid";


const HomeWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const offset =  0;
const limit = 10;

const HomePage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["books", offset, limit],
    queryFn: () => fetchBooks(offset, limit)
  });

  return ( 
    <HomeWrapper>
      <Logo width="140" />
      <SearchBar />
      <BookGrid isLoading={isLoading} isError={error} books={data}/>
    </HomeWrapper>
   );
}
 
export default HomePage;