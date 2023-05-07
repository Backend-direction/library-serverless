import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import BookDetailsPage from "../pages/BookDeatils/Book";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: 'books/:bookId',
    element: <BookDetailsPage />
  }
])