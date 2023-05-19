import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Services from "./components/services/Services";

export default function App() {
  const themes = ["dark", "halloween", "light", "luxury", "forest", "cupcake", "bumblebee", "emerald", "retro", "valentine", "coffee"];
  const [index, setindex] = useState(2);
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    setindex((index + 1) % themes.length);
    setTheme(themes[index]);
  };

  return (
    <div className="">
      <Navbar handleClick={handleClick} theme={theme} />
      <About theme={theme} />
      <Services theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}
