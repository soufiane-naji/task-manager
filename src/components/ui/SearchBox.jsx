import { FaSearch } from "react-icons/fa";

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className="search-box-container">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search tasks..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
