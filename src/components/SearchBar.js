import { Component } from "react";
import SearchStatus from "./SearchStatus";
import SearchText from "./SearchText";

// function SearchBar() {
//   return (
//     <div className="mt-4 d-flex">
//       <SearchText />
//       <SearchStatus />
//     </div>
//   );
// }

class SearchBar extends Component {
  render() {
    return (
      <div className="mt-4 d-flex">
        <SearchText searchTask={this.props.searchTask} />
        <SearchStatus searchTask={this.props.searchTask}/>
      </div>
    );
  }
}

export default SearchBar;
