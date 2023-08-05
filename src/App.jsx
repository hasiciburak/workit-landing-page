import "./App.scss";
import Header from "./components/sections/Header";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import HeroBackground from "./components/shared/HeroBackground";

function App() {
  return (
    <div className="w-screen">
      <HeroBackground />
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
