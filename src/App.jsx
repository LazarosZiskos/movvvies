import "./App.css";

const App = () => {
  return (
    <main>
      <header className="mt-15 flex justify-center items-center flex-col">
        <img src="logo (1).png" alt="logo" />
        <img src="hero.png" alt="hero-image" />
        <h2 className="text-6xl text-white text-center tracking-wide">
          Discover <span className="text-[#AB8BFF]">Movies</span> You&apos;ll
          Enjoy Without the Effort.
        </h2>
        <div>
          <img src="search.svg" alt="search" />
          <input
            className="mt-8 text-white"
            placeholder="Search through thousands of movies online"
          />
        </div>
      </header>
    </main>
  );
};
export default App;
