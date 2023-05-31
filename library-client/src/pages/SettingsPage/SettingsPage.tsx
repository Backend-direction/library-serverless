import { IconButton, Theme, styled, Box } from "@mui/material";
import * as React from 'react';
import { useTheme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { settings } from "./settings-items";
import { grey } from '@mui/material/colors';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Outlet, Link, useLocation } from "react-router-dom";

interface SettingsPageProps {
  
}

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  top: '82px',
  background: 'transparent',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  top: '82px',
  background: 'transparent',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
 
const SettingsPage = () => {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();
  console.log(pathname)
  const handleDrawerState = () => {
    setOpen(prev => !prev);
  }

  return ( 
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open && 
            (
              <Grid2 container>
                <Typography variant="h6">Seetings</Typography>
                <Typography variant="caption" color={grey[500]}>Manage your library</Typography>
              </Grid2>
            )
          }
          <IconButton onClick={handleDrawerState}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {settings.map((setting, index) => (
            <Link to={setting.link} style={{textDecoration: 'none', color: grey[700] }}>
              <ListItem key={index} disablePadding sx={{ display: 'block' }} selected={pathname.includes(setting.link)}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <setting.icon />
                  </ListItemIcon>
                  <ListItemText primary={setting.section} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            
            </Link>
          ))}
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
   );
}
 
export default SettingsPage;