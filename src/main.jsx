import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App.jsx";
import Mainlayout from "./layout/Mainlayout.jsx";
import Home from "./pages/Home.jsx";
import Allmovies from "./pages/Allmovies.jsx";
import AuthProvider from "./auth/AuthProvider.jsx";
import SignUp from "./component/SignUp.jsx";
import Login from "./component/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/all-movies",
        element: <Allmovies></Allmovies>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </AuthProvider>,
);
