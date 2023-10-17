import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./comopnents/Layout/Layout";
import Home from "./comopnents/Home/Home";
import Login from "./comopnents/Login/Login";
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
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </>
  );
}

export default App;
