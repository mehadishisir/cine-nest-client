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
import MoviesDetails from "./component/MoviesDetails.jsx";
import MyFavourite from "./pages/MyFavourite.jsx";
import AddMovie from "./pages/AddMovie.jsx";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./auth/PrivateRoute.jsx";
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
        path: "/add-movie",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-movies",
        element: <Allmovies></Allmovies>,
      },
      {
        path: "/movies/:id",
        element: (
          <PrivateRoute>
            <MoviesDetails></MoviesDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-favourites/:userEmail",
        element: (
          <PrivateRoute>
            <MyFavourite></MyFavourite>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
