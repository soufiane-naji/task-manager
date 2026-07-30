const TaskCard = ({ task, deleteTask }) => {
  const { id, title, description, status, createdAt } = task;
  return (
    <article className="task-card">
      <div className="task-card-content">
        <h3>{title}</h3>

        <span className={`task-status ${status.toLowerCase()}`}>{status}</span>
      </div>

      <div className="task-card-info">
        <p className="task-description">{description}</p>

        <p className="task-date">
          Created: <span>{createdAt}</span>
        </p>
      </div>

      <div className="task-card-actions">
        <button className="edit-task-btn">Edit</button>

        <button className="delete-task-btn" onClick={() => deleteTask(id)}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default TaskCard;
