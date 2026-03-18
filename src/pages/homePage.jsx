import Header from "../components/header";
import About from "../components/About";
import Projects from "../components/Projects";
import Featured from "../components/featured";
import Register from "../components/Register";

export default function HomePage() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Featured />
      <Register />
    </>
  );
}
