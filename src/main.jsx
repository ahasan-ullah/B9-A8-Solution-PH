import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import BookDetails from "./components/BookDetails/BookDetails";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books/:bookId",
        loader: () => fetch(`/booksData.json`),
        element: <BookDetails></BookDetails>,
      },
      {
        path: "listedBooks",
        loader: () => fetch("/booksData.json"),
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </StrictMode>
);
