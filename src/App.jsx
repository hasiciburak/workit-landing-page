import "./App.scss";
import Header from "./components/sections/Header";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import HeroBackground from "./components/shared/HeroBackground";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div className="w-screen">
      <HeroBackground />
      <Navbar />
      <Hero />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
