import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import Book from "../pages/Book/Book";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: 'books/:bookId',
    element: <Book />
  }
])