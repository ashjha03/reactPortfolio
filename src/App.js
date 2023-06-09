import { useState } from "react";
import About from "./components/About";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Services from "./components/services/Services";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/projects/Projects";
import ThankYou from "./components/ThankYou";

export default function App() {
  const themes = ["dark", "halloween", "light", "luxury", "forest", "cupcake", "bumblebee", "emerald", "retro", "valentine", "coffee"];
  const [index, setindex] = useState(2);
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    setindex((index + 1) % themes.length);
    setTheme(themes[index]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar handleClick={handleClick} theme={theme} />
          <Home theme={theme} />
          <Projects theme={theme} />
          <About theme={theme} />
          <Services theme={theme} />
          <Contact theme={theme} />
          <Footer theme={theme} /></>
        } />
        <Route path='/thankyou' element={<ThankYou/>} />
      </Routes>
    </Router>
  );
}
