import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import BookDetailsPage from "../pages/BookDeatils/BookDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: 'books/:bookId/:partionId',
    element: <BookDetailsPage />
  }
])