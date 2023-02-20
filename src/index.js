import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import "./index.css";
// import App from "./App";
import MainPage from "./pages/MainPage";
import reportWebVitals from "./reportWebVitals";
import SubListPage from "./pages/SubListPage";
import DetailPage from "./pages/DetailPage";
import AboutUsPage from "./pages/AboutUsPage";
import EventPage from "./pages/EventPage";
import ContactUsPage from "./pages/ContactUsPage";
// redux
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "list",
    element: <SubListPage />,
  },
  {
    path: "list/:productId",
    element: <DetailPage />,
  },
  {
    path: "about",
    element: <AboutUsPage />,
  },
  {
    path: "event",
    element: <EventPage />,
  },
  {
    path: "contact",
    element: <ContactUsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
