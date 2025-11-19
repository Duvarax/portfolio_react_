import MainLayout from "./layout/MainLayout";
import AboutMe from './components/AboutMe'
import Home from "./components/Home";
import { BrowserRouter as BrowserRouter } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Home/>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
