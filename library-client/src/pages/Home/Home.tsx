import { Box, styled } from "@mui/material";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../../services/books";


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

const Home = () => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["books", offset, limit],
    queryFn: () => fetchBooks(offset, limit)
  });
  
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred:</div>;

  return ( 
    // <HomeWrapper>
    //   <Logo width="140" />
    //   <SearchBar />
    // </HomeWrapper>
    <div>
      {!!data && data.map(book => <span>book.title</span>) }
    </div>
   );
}
 
export default Home;