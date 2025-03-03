import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab); // Adds all solid, regular, and brand icons globally

import {
  Home,
  Catalog,
  Collections,
  Clearance,
  SectionsAll,
  ContactUs,
  Wishlist,
  Account,
  Cart,
  // Wishlist
} from "./Components/index.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/clearance",
        element: <Clearance />,
      },
      {
        path: "/sectionsall",
        element: <SectionsAll />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
