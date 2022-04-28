function CountTask({ filteredTaskList }) {
  const unfinishedTaskCount = () =>
    filteredTaskList.filter((taskItem) => !taskItem.isFinish).length;
  return (
    <div className="mt-4 py-3 text-center text-white bg-black">
      {`${unfinishedTaskCount()} of ${filteredTaskList.length} Remaining`}
    </div>
  );
}

export default CountTask;
