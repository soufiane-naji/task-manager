const SortBox = ({ sortBy, setSortBy }) => {
  const sorted = [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
    { label: "A → Z", value: "a" },
    { label: "Z → A", value: "z" },
    { label: "Completed First", value: "completed" },
    { label: "Pending First", value: "pending" },
  ];

  return (
    <div className="select-box-container">
      <select
        className="select-box"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        {sorted.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBox;
