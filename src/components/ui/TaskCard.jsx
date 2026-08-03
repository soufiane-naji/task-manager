import { FaCalendarAlt, FaEdit, FaSyncAlt, FaTrash } from "react-icons/fa";

const TaskCard = ({
  task,
  setEditObj,
  setIsModalOpen,
  toggle,
  setIsConfirmModalOpen,
  setIdTaskDelete,
}) => {
  const { id, title, description, status, createdAt } = task;
  return (
    <article className={`task-card ${status}`}>
      <div className="task-card-content">
        <h3>{title}</h3>

        <span className={`task-status ${status.toLowerCase()}`}>{status}</span>
      </div>

      <div className="task-card-info">
        <p className="task-description">{description}</p>

        <p className="task-date">
          <FaCalendarAlt />
          <span>{createdAt}</span>
        </p>
      </div>

      <div className="task-card-actions">
        <button
          className="edit-task-btn"
          onClick={() => {
            setEditObj(task);
            setIsModalOpen(true);
          }}
        >
          <FaEdit />
          Edit
        </button>

        <button
          className="delete-task-btn"
          onClick={() => {
            setIsConfirmModalOpen(true);
            setIdTaskDelete(id);
          }}
        >
          <FaTrash />
          Delete
        </button>
        <button
          onClick={() => toggle(id, status)}
          className={`toggle-task-btn ${status.toLowerCase()}`}
        >
          <FaSyncAlt />
          {status.toLowerCase() == "pending" ? "Mark Complete" : "Mark Pending"}
        </button>
      </div>
    </article>
  );
};

export default TaskCard;
