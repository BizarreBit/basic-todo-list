import { Component } from "react";

// function SearchText() {
//   return (
//     <div className="input-group">
//       <input type="text" className="form-control rounded-0" />
//       <button className="btn btn-secondary rounded-0">
//         <i className="fas fa-times" />
//       </button>
//     </div>
//   );
// }

class SearchText extends Component {
  state = {
    input: "",
  };

  timer;
  componentDidUpdate() {
    clearTimeout(this.timer);
    this.timer = setTimeout(
      () => this.props.searchTask({ text: this.state.input }),
      1000
    );
  }

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          value={this.state.input}
          onChange={(e) => this.setState({ input: e.target.value })}
          className="form-control rounded-0"
        />
        <button
          onClick={() => this.setState({ input: "" })}
          className="btn btn-secondary rounded-0"
        >
          <i className="fas fa-times" />
        </button>
      </div>
    );
  }
}

export default SearchText;
