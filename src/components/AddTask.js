// function AddTask() {
//   return (
//     <div>
//       <form>
//         <div className="input-group">
//           <input type="text" className={`form-control rounded-0`} />
//           <button className="btn btn-success rounded-0">
//             <i className="fas fa-plus" />
//           </button>
//           <div className="invalid-feedback">Error</div>
//         </div>
//       </form>
//     </div>
//   );
// }

import { Component } from "react";

class AddTask extends Component {
  initialState = {
    input: "",
    error: "",
  };

  state = { ...this.initialState };

  handleSubmit = (e) => {
    e.preventDefault();
    const text = this.state.input.trim();
    if (text) {
      const promise = this.props.addTask({ title: text, completed: false });
      promise.then((result) =>
        result
          ? this.setState({ ...this.initialState })
          : this.setState({
              error: "Network Error: Please check your connection.",
            })
      );
    } else this.setState({ error: "Task title is required" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={this.state.input}
              onChange={(e) => this.setState({ input: e.target.value })}
              className={`form-control rounded-0 ${
                this.state.error && "is-invalid"
              }`}
            />
            <button className="btn btn-success rounded-0">
              <i className="fas fa-plus" />
            </button>
            <div className="invalid-feedback">{this.state.error}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTask;
