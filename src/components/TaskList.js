import { Component } from "react";
import TaskItem from "./TaskItem";

// function TaskList() {
//   return (
//     <div className="shadow">
//       <ul className="list-group rounded-0">
//         <TaskItem />
//       </ul>
//     </div>
//   );
// }

class TaskList extends Component {
  render() {
    return (
      <div className="shadow">
        <ul className="list-group rounded-0">
          {this.props.taskList.map((item) => (
            <TaskItem
              key={item.id}
              taskItem={item}
              deleteTask={this.props.deleteTask}
              updateTask={this.props.updateTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
