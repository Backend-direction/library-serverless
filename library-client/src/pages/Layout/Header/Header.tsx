import { Box, Typography, styled, Divider } from "@mui/material";
import { ManageAccount } from "../../../components/ManageAccount/ManageAccount";
import HeaderLinks from "../../../components/HeaderLinks/HeaderLinks";
import Logo from "../../../components/Logo/Logo";
import { PathMatch, useMatch, Link } from "react-router-dom";

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
interface HeaderProps {
  userName: string | undefined;
  onLogOut: () => void;
}

const renderLogoSection = (isHome: PathMatch<string> | null, userName = 'guest') => {
  return isHome
    ? <WelcomeText>Welcome back, <b>{userName}</b></WelcomeText>
    : <Link to='/'><Logo width="50" /></Link>
}

const Header = ({ userName, onLogOut }: HeaderProps) => {
  const isHome = useMatch('/');

  return ( 
    <>
      <HeaderWrapper>
        {renderLogoSection(isHome, userName)}
        <NavGroup>
          <HeaderLinks />
          <ManageAccount
            avatar=''
            name={userName}
            logOut={onLogOut}
          />
        </NavGroup>
      </HeaderWrapper>
      <Divider orientation="horizontal" flexItem />
  
    </>
   );
}
 
export default Header;