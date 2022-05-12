import { Component } from "react";

// function CountTask() {
//    return (
//     <div className="mt-4 py-3 text-center text-white bg-black">
//       1 of 2 Remaining
//     </div>
//   );
// }

class CountTask extends Component {
  render() {
    const total = this.props.taskList.length;
    const remain = this.props.taskList.filter((item) => !item.completed).length;
    return (
      <div className="mt-4 py-3 text-center text-white bg-black">
        {`${remain} of ${total} Remaining`}
      </div>
    );
  }
}

export default CountTask;
