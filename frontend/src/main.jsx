import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts ✨
import AuthLayout from "./layouts/Authlayout.jsx";

// import page
import LoginForm from "./pages/LoginPage.jsx";
import BusMian from "./pages/BusMian.jsx";
import CommentPage from "./pages/CommentPage.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <LoginForm />
    ),
  },
  {
    path: "/home",
    element: (
      <AuthLayout>
        <BusMian />
      </AuthLayout>
    ),
  },
  {
    path: "/comment",
    element: <CommentPage />,
  },
  {
    path: "/review",
    element: <ReviewPage />,
  },
  {
    path: "/history/:id",
    element: <HistoryPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
