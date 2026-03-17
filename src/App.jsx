import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Featured from "./components/featured";
import Register from "./components/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Featured />
      <Register />
      <Footer />
    </>
  );
}

export default App;
