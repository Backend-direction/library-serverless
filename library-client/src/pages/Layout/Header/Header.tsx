import { Box, Typography, styled } from "@mui/material";
import { ManageAccount } from "../../../components/ManageAccount/ManageAccount";
import HeaderLinks from "../../../components/HeaderLinks/HeaderLinks";

const HeaderWrapper = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(rgb(255, 255, 255), 75%, rgb(255, 255, 255))',
    padding: '14px'
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

const Header = ({ userName }: { userName: string }) => {
  return ( 
    <HeaderWrapper>
      <WelcomeText>
        Welcome back, <b>{userName}</b>
      </WelcomeText>
      <NavGroup>
        <HeaderLinks />
        <ManageAccount
          avatar=''
          name='Vova'
        />
      </NavGroup>
    </HeaderWrapper>
   );
}
 
export default Header;