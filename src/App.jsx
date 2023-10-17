import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./comopnents/Layout/Layout";
import Home from "./comopnents/Home/Home";
import Login from "./comopnents/Login/Login";
import AddTask from "./comopnents/AddTask/AddTask";
import NotFound from "./comopnents/NotFound/NotFound";
import { Toaster } from "react-hot-toast";
import EditeTask from "./comopnents/EditeTask/EditeTask";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/add",
          element: <AddTask />,
        },
        {
          path: "/edite",
          element: <EditeTask />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <Toaster />
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </>
  );
}

export default App;
