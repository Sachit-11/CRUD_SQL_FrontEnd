import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {

  const Layout = ({children}) => {
    return(
      <div className = "layout">
        <Navbar />
        {children}
      </div>
    )
  }

  const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
        <Layout>
          <Books />
        </Layout>,
      errorElement: <Error />
    },
    {
      path: "/add",
      element: 
        <Layout>
          <Add />
        </Layout>,
    },
    {
      path: "/update",
      element: 
        <Layout>
          <Update />
        </Layout>,
    }
  ])

  return(
    <RouterProvider router = {router} />
  );
}

export default App;
