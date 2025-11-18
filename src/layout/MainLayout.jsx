import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Navtest from "../components/navtest";

function MainLayout({ children }) {
  return (
    <div className="w-full flex flex-col items-center justify-between min-h-screen">
      <div className="w-full flex justify-center">
        <NavBar />
      </div>
      <div className="max-w-7xl w-full px-4">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
