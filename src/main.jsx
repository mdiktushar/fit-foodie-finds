import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/universal.css";
import { RouterProvider } from "react-router-dom";
import route from "./routes/routes.jsx";
import FirebaseAuthProvider from "./providers/FirebaseAuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <RouterProvider router={route} />
    </FirebaseAuthProvider>
  </React.StrictMode>
);
