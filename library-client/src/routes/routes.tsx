import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Book from "../pages/Book/Book";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: 'books/:bookId',
    element: <Book />
  }
])