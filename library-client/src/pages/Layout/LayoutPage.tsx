import { RouterProvider } from "react-router-dom";
import Header from "./Header/Header";
import { router } from "../../routes/routes";
import { Box } from "@mui/material";
import { useMsal } from "@azure/msal-react";

const Layout = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  
  return (
    <Box px={3} pb={3}>
      <Header userName={activeAccount?.name} />
      <RouterProvider router={router} />
    </Box>
   );
}
 
export default Layout;