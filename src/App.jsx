import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSlider from "./components/HeroSlider";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Header />
        <HeroSlider />
      </main>
      <Footer />
    </div>
  );
}

export default App;
