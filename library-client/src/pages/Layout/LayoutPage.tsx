import { RouterProvider } from "react-router-dom";
import Header from "./Header/Header";
import { router } from "../../routes/routes";
import { Box } from "@mui/material";

 
const Layout = () => {
  return (
    <Box px={3} pb={3}>
      <Header
        userName='Vova'
      />
      <RouterProvider router={router} />
    </Box>
   );
}
 
export default Layout;