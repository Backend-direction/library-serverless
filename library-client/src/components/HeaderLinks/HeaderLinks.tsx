import { Box, Button, Link, Tooltip, styled } from "@mui/material";
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';

const HeaderLinks = () => {

  const LinksWrapper = styled(Box)(() => {
    return {
      opacity: '1',
      whiteSpace: 'nowrap',
    }
  });
  
  const LinkWrapper = styled('span')(() => {
    return {
      marginRight: '0px',
    }
  });
  
  const NavTitleContainer = styled('span')(() => {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left',
      padding: '2px',
    }
  });
  
  const NavTitleText = styled('span')(() => {
    return {
      marginLeft: '6px',
    }
  });

    return (
      <LinksWrapper>
         <LinkWrapper>
            <Link href="/analytics">
              <Button>
                <Tooltip title="View Library usage analytics">
                  <NavTitleContainer>
                    <PollOutlinedIcon />
                    <NavTitleText>Analytics</NavTitleText>
                  </NavTitleContainer>
                </Tooltip>
              </Button>
            </Link>
          </LinkWrapper>
          <LinkWrapper style={{ marginRight: 12 }}>
            <Link href="/settings">
              <Button>
                <Tooltip title="Manage your Libary settings">
                  <SettingsSuggestOutlinedIcon />
                </Tooltip>
              </Button>
            </Link>
          </LinkWrapper>
      </LinksWrapper>       
    );
}

export default HeaderLinks;