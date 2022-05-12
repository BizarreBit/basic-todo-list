import { Component } from "react";

// function TaskEdit() {
//   return (
//     <form className="flex-grow-1">
//       <div className="input-group">
//         <input
//           type="text"
//           className={`form-control rounded-0`}
//         ></input>
//         <button className="btn btn-primary rounded-0">
//           <i className="far fa-edit" />
//         </button>
//         <button type="button" className="btn btn-danger rounded-0">
//           <i className="fa fa-times" />
//         </button>
//         <div className="invalid-feedback">Error</div>
//       </div>
//     </form>
//   );
// }

class TaskEdit extends Component {
  state = {
    input: this.props.title,
    error: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const text = this.state.input.trim();
    if (text !== this.props.title) {
      if (text) {
        const promise = this.props.updateTask(this.props.id, { title: text });
        promise.then((result) =>
          result
            ? this.props.closeEdit()
            : this.setState({
                error: "Network Error: Please check your connection.",
              })
        );
      } else this.setState({ error: "Task title is required" });
    } else this.props.closeEdit();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="flex-grow-1">
        <div className="input-group">
          <input
            type="text"
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
            className={`form-control rounded-0 ${
              this.state.error && "is-invalid"
            }`}
          ></input>
          <button className="btn btn-primary rounded-0">
            <i className="far fa-edit" />
          </button>
          <button
            type="button"
            onClick={this.props.closeEdit}
            className="btn btn-danger rounded-0"
          >
            <i className="fa fa-times" />
          </button>
          <div className="invalid-feedback">{this.state.error}</div>
        </div>
      </form>
    );
  }
}

export default TaskEdit;
