import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Error from "./pages/Error";

function App() {

  const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Books />,
      errorElement: <Error />
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/update/:id",
      element: <Update />
    }
  ])

  return(
    <div className = "app">
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
