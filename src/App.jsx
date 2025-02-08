import "./App.css";
import Search from "./components/Search";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState();
  return (
    <main>
      <header className="mt-15 flex justify-center items-center flex-col">
        <img src="logo (1).png" alt="logo" />
        <img src="hero.png" alt="hero-image" />
        <h1 className="max-w-4x mx-auto leading-tight text-5xl tracking-[-1%] text-white sm:text-[64px] sm:leading-[76px] text-white text-center tracking-wide">
          Find <span className="text-[#AB8BFF]">Movies</span> You&apos;ll Love
          Without the Hassle
        </h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>
    </main>
  );
};
export default App;
