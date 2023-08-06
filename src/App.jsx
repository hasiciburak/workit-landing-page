import "./App.scss";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";

function App() {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
