import { Avatar, Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

interface Props {
    avatar?: string;
    name?: string;
}

export const ManageAccount = ({ avatar, name }: Props) => {
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
          sx={{ width: '120px' }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem key="version" disabled style={{ color: '#8C8C8C' }}>
              item 1
          </MenuItem>
        
          <Divider />
          <MenuItem key="profile">
            Your Profile
          </MenuItem>
          <Divider />
    
          <MenuItem key="graphiQLLink">
              <a href="#">GraphiQL</a>
          </MenuItem>
          <MenuItem key="openapiLink">
            <a href="#">Sign out</a>
          </MenuItem>
        </Menu>
    );

    return (
      <>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          <Avatar />
        </IconButton>
        {menu}
      </>
    );
};
