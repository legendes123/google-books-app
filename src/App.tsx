import React from 'react';
import DescriptionBooks from "./pages/DescriptionBooks/DescriptionBooks";
import BooksCatalog from "./pages/BooksCatalog/BooksCatalog";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./error/ErrorPage/ErrorPage";
import {useAppSelector} from "./hooks/hooks";
// fix booksIdReplace
function App() {
  const books = useAppSelector((state) => state.books.books)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <BooksCatalog />,
      errorElement: <ErrorPage />
    },
    {
      path: '/DescriptionBooks',
      element: <DescriptionBooks />,
      errorElement: <ErrorPage />,

      // loader: async ({ params  }) => {
        // const booksId = params.booksId
        // const booksIdReplace = booksId?.replace(/:/g,'')
        // return books.filter((elem: any) => elem.id  === booksIdReplace)
      // }
    }
  ])
  return (
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
