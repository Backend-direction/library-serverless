import { RouterProvider } from "react-router-dom";
import Header from "./Header/Header";
import { router } from "../../routes/routes";

 
const Layout = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
   );
}
 
export default Layout;