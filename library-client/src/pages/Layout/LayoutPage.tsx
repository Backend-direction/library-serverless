import { Outlet, RouterProvider } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { Box } from "@mui/material";
import Header from "./Header/Header";
import { router } from "../../routes/routes";

const Layout = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const logOutHandler = () => {
    const logoutRequest = {
      account: activeAccount,
      postLogoutRedirectUri: "/",
    };
    instance.logoutRedirect(logoutRequest);
  }
 
  return (
    <Box px={3} pb={3}>
      <Header userName={activeAccount?.name} onLogOut={logOutHandler} />
      <Outlet />
    </Box>
   );
}
 
export default Layout;