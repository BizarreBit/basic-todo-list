import SearchStatus from "./SearchStatus";
import SearchText from "./SearchText";

function SearchBar({searchText, setSearchText, setSearchStatus}) {

  return (
    <div className="mt-4 d-flex">
      <SearchText searchText={searchText} setSearchText={setSearchText}/>
      <SearchStatus setSearchStatus={setSearchStatus}/>
    </div>
  );
}

export default SearchBar;
