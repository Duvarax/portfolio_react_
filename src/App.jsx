import MainLayout from "./layout/MainLayout";
import AboutMe from './components/AboutMe'
import Home from "./components/Home";
import { BrowserRouter as BrowserRouter } from "react-router";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-black">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[rgb(0,195,255)]/30 border-t-[rgb(0,195,255)] rounded-full animate-spin"></div>
          <p className="text-white text-lg font-mono tracking-wider">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <MainLayout>
        <Home/>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
