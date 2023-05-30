import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import BookDetailsPage from "../pages/BookDeatils/BookDetailsPage";
import Layout from "../pages/Layout/LayoutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'books/:genre/:bookId',
        element: <BookDetailsPage />
      }
    ]
  },
])