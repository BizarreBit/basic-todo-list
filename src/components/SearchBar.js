import SearchStatus from "./SearchStatus";
import SearchText from "./SearchText";

function SearchBar() {
  return (
    <div className="mt-4 d-flex">
      <SearchText />
      <SearchStatus />
    </div>
  );
}

export default SearchBar;
