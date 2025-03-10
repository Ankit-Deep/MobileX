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
  Account,
  Cart,
  Wishlist,
  Cameras,
  Accessories,
  BestSellers,
  ComingSoon,
  Computing,
  New,
  Sale,
  TV,
  Mobile,
  Laptops,
  CollectionComp,
} from "./Components/index.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Tv } from "lucide-react";

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
      // {
      //   path: "/collections/:collectionComp",
      //   element: <CollectionComp/>
      // },
      {
        path: "/collections/cameras-photography",
        element: <Cameras />,
      },
      {
        path: "/collections/accessories",
        element: <Accessories />,
      },
      {
        path: "/collections/bestsellers",
        element: <BestSellers />,
      },
      {
        path: "/collections/coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "/collections/computing",
        element: <Computing />,
      },
      {
        path: "/collections/new",
        element: <New />,
      },
      {
        path: "/collections/sale",
        element: <Sale />,
      },
      {
        path: "/collections/tv-video",
        element: <TV />,
      },
      {
        path: "/collections/mobile",
        element: <Mobile />,
      },
      {
        path: "/collections/laptops-computers",
        element: <Laptops />,
      },
      {
        path: "/clearance",
        element: <Clearance />,
      },
      {
        path: "/sections",
        element: <SectionsAll />,
      },
      {
        path: "/contact",
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