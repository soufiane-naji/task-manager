const SelectBox = ({ selectedStatus, setSelectedStatus }) => {
  return (
    <div className="select-box-container">
      <select
        className="select-box"
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default SelectBox;
