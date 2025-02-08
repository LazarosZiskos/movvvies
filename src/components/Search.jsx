// eslint-disable-next-line react/prop-types
const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full bg-light-100/5 px-4 py-3 rounded-lg mt-10 max-w-3xl mx-auto">
      <div className="relative flex items-center">
        <img
          src="search.svg"
          alt="search"
          className="absolute left-2 h-5 w-5"
        />
        <input
          type="text"
          placeholder="Search through thousands of movies..."
          className="w-full bg-transparent py-2 sm:pr-10 pl-10 text-base text-gray-200 placeholder-light-200 outline-hidden"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
    </div>
  );
};

export default Search;
