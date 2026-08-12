import { FaTriangleExclamation } from "react-icons/fa6";
import { toast } from "react-toastify";

const ConfirmationModal = ({
  idTaskDelete,
  setIsConfirmModalOpen,
  deleteTask,
}) => {
  const handleDelete = () => {
    deleteTask(idTaskDelete);
    setIsConfirmModalOpen(false);
    toast.success("Task deleted successfully");
  };

  return (
    <div
      className="modal-overlay task-modal-deleted"
      onClick={() => setIsConfirmModalOpen(false)}
    >
      <article onClick={(e) => e.stopPropagation()}>
        <div className="delete-icon">
          <FaTriangleExclamation />
        </div>
        <h3>Delete Task</h3>
        <p>
          Are you sure you want to delete this task? This action cannot be
          undone.
        </p>

        <div className="deleted-action">
          <button
            className="can-del"
            onClick={() => setIsConfirmModalOpen(false)}
          >
            Cancel
          </button>
          <button className="del" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </article>
    </div>
  );
};

export default ConfirmationModal;
