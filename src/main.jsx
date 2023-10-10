import React from "react";
import ReactDOM from "react-dom/client";
import Default from "./Default";

import App from "./pages/App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import "./css/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/default",
    element: <Default />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
