import { LuClipboardList } from "react-icons/lu";

const EmptyState = ({ setIsModalOpen, setEditObj }) => {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <LuClipboardList />
      </div>
      <h2>No Tasks Found</h2>

      <p>You don't have any tasks yet. Start by creating your first task.</p>

      <button
        className="add-task-btn"
        onClick={() => {
          setIsModalOpen(true);
          setEditObj(null);
        }}
      >
        + Add Task
      </button>
    </div>
  );
};

export default EmptyState;
