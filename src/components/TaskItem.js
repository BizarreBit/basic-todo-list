import { Component } from "react";
import TaskEdit from "./TaskEdit";

// function TaskItem() {
//   return (
//     <li
//       className={`list-group-item d-flex justify-content-between align-items-center py-3 bd-callout bd-callout-success`}
//     >
//       <TaskEdit />
//       <>
//         <span>Title</span>
//         <div className="btn-group">
//           <button className="btn btn-info rounded-0">
//             <i className={`fas fa-toggle-on`} />
//           </button>
//           <button className="btn btn-danger rounded-0">
//             <i className="far fa-trash-alt" />
//           </button>
//         </div>
//       </>
//     </li>
//   );
// }

class TaskItem extends Component {
  state = {
    isEdit: false,
  };

  closeEdit = () => this.setState({ isEdit: false });

  render() {
    const { id, title, completed } = this.props.taskItem;
    return (
      <li
        key={id}
        className={`list-group-item d-flex justify-content-between align-items-center py-3 bd-callout bd-callout-${
          completed ? "success" : "warning"
        }`}
      >
        {this.state.isEdit ? (
          <TaskEdit id={id} title={title} closeEdit={this.closeEdit} updateTask={this.props.updateTask} />
        ) : (
          <>
            <span onClick={() => this.setState({ isEdit: true })}>{title}</span>
            <div className="btn-group">
              <button onClick={() => this.props.updateTask(id, {completed: !completed})} className="btn btn-info rounded-0">
                <i className={`fas fa-toggle-${completed ? "on" : "off"}`} />
              </button>
              <button onClick={() => this.props.deleteTask(id)} className="btn btn-danger rounded-0">
                <i className="far fa-trash-alt" />
              </button>
            </div>
          </>
        )}
      </li>
    );
  }
}

export default TaskItem;
