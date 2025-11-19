import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Navtest from "../components/navtest";

function MainLayout({ children }) {
  return (
    <div className="w-full flex flex-col items-center justify-between min-h-screen">
      <div className="sticky bg-gray-950/85 top-0 z-10 w-full h-fit flex justify-center mb-5">
        <NavBar />
      </div>
      <div className="max-w-7xl w-full  md:py-30 px-4 flex flex-col items-center justify-center">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
