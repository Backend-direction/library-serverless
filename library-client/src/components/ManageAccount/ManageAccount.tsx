import { Avatar, Divider, IconButton, Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";
  
const StyledMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: start;
  align-items: center;
  color: red;
  && {
      margin-top: 2px;
  }
  & > a:visited,
  & > a:active,
  & > a:focus {
      clear: both;
      border: none;
      outline: 0;
  }
`;

interface Props {
    avatar?: string;
    name?: string;
    logOut: () => void; 
}

export const ManageAccount = ({ avatar, name, logOut }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const menu = (
    <Menu 
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem key="version" disabled style={{ color: '#8C8C8C' }}>
        v0.0.1
      </MenuItem>
    
      <Divider />

      <MenuItem key="profile">
        Your Profile
      </MenuItem>
      <MenuItem key="favorites">
        Favorites
      </MenuItem>

      <Divider />

      <StyledMenuItem 
        key="openapiLink"
        onClick={() => logOut()}
      >
        Sign out
      </StyledMenuItem>
    </Menu>
  );

  return (
    <>
      <IconButton
        size="small"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Avatar
          sx={{ width: 34, height: 34 }}
        />
      </IconButton>
      {menu}
    </>
  );
};
