import { Box, Typography, styled } from "@mui/material";
import { ManageAccount } from "../../../components/ManageAccount/ManageAccount";

const HeaderWrapper = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'linear-gradient(rgb(255, 255, 255), 75%, rgb(255, 255, 255))'
  }
});

const WelcomeText = styled(Typography)(() => {
  return {
    backgroundColor: 'transparent',
  };
});

const NavGroup = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const Header = () => {
  return ( 
    <HeaderWrapper>
      <WelcomeText>
        Welcome back
      </WelcomeText>
      <NavGroup>
          <ManageAccount
            avatar=''
            name='Vova'
          />
      </NavGroup>
    </HeaderWrapper>
   );
}
 
export default Header;