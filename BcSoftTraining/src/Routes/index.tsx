import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute, Redirect } from "../AtomicDesign/Organism";
import { Error, Login } from "./Pages";
import Layout from "../AtomicDesign/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "dashboard",
        element: <></>,
      },
      {
        index: true,
        element: <Redirect route={"dashboard"}/>,
      },
    ],
  },
  {
    index: true,
    element: <Login />,
  },
  {
    path: "*",
    element: <Login />,
  },
  {
    path: '/test',
    element: <></>
  }
]);
