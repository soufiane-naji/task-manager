import { MdClose } from "react-icons/md";
import { useState } from "react";
import { toast } from "react-toastify";

const AddTaskForm = ({ setIsModalOpen, addTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    createdAt: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim() || !formData.createdAt) {
      toast.error("Remplissez tous les champs");
      return;
    }
    if (formData.title.trim().length < 3) {
      toast.error("Au moins 3 lettres Sur Title");
      return;
    }
    if (formData.description.trim().length < 10) {
      toast.error("Au moins 10 lettres Sur Description");
      return;
    }
    addTask({ ...formData, id: Date.now() });
    setFormData({
      title: "",
      description: "",
      status: "pending",
      createdAt: "",
    });
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-task">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Add Task</h2>
          <MdClose
            className="close-btn"
            onClick={() => setIsModalOpen(false)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
