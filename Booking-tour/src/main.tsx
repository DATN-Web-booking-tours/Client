import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import HomePage from "@/pages/Home-page.tsx";
import Profile from "@/pages/Profile-page.tsx";
import BookingPage from "@/pages/Booking-page.tsx";
import SignInPage from "./components/shared/SignIn.tsx";
import SignUpPage from "./components/shared/SignUp.tsx";
import LocationInfoPage from "./pages/LocationInfo-page.tsx";
import TourOwnerPage from "./pages/TourOwner-page.tsx";
import StatisticAdminPage from "./pages/StatisticAdmin-page.tsx";
import StatisticOwnerAdmin from "./pages/StatisticOwnerAdmin.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import {Provider} from "react-redux"
// import {store} from "@/lib/redux/store"
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFound-page.tsx";
import TourPage from "./pages/Tour-page.tsx";
import TourDetailPage from "./pages/TourDetail-page.tsx";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "tour",
        element: <TourPage />,
      },
      {
        path: "tour/:id",
        element: <TourDetailPage />,
      },
      {
        path: "tourowner",
        element: <TourOwnerPage />,
      },
      {
        path: "statistic",
        element: <StatisticAdminPage />,
      },
      {
        path: "statisticowner",
        element: <StatisticOwnerAdmin />,
      },
      {
        path: "home/:id",
        element: <LocationInfoPage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "booking",
        element: <BookingPage />,
      },
    ],
  },
]);
const clientID =
  "74177461559-lo3iv873kif2fr5tbc67vdnqk7on02j9.apps.googleusercontent.com";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={clientID}>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
      {/* <App /> */}
      {/* <Provider store={store}> */}

      {/* </Provider> */}
    </React.StrictMode>
  </GoogleOAuthProvider>
);
