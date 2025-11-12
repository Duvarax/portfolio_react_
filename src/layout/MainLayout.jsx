import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
function MainLayout({ children }) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <NavBar />
      <div className="max-w-7xl min-w-7xl bg-red-50 ">
        <main className="w-full flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
