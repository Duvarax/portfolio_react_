import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Separator from "./Separator";

function Footer() {
  return (
    <footer className="w-screen min-h-40 bg-[rgb(8,10,39)] text-white py-8 mt-10 relative flex flex-col items-center justify-center">
      <Separator/>
      <p className="opacity-80"> Duvara Claudio </p>
      <p></p>
    </footer>
  );
}

export default Footer;
