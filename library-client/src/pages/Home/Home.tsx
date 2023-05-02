import { Box, styled } from "@mui/material";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomeWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const Home = () => {
  return ( 
    <HomeWrapper>
      <Logo width="140" />
      <SearchBar />
    </HomeWrapper>
   );
}
 
export default Home;