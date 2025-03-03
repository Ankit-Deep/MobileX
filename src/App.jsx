import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Header, Navbar, Footer } from "./Components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <div>
          <Header />
          <Navbar />
        </div>

        <main className=" h-full">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
