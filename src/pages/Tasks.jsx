import { useEffect, useState } from "react";
import EmptyState from "../components/ui/EmptyState";
import SearchBox from "../components/ui/SearchBox";
import SelectBox from "../components/ui/SelectBox";
import TaskCard from "../components/ui/TaskCard";
import AddTaskForm from "../components/ui/AddTaskForm";

const Tasks = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [editObj, setEditObj] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) &&
      (task.status === selectedStatus || selectedStatus === "all")
  );
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const editTask = (taskEdit) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskEdit.id ? taskEdit : task))
    );
    setEditObj(null);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="tasks-page">
      <div className="task-header">
        <div>
          <h1>Tasks</h1>
          <p>Manage your daily tasks efficiently.</p>
        </div>
        <button
          onClick={() => {
            setIsModalOpen(true);
            setEditObj(null);
          }}
          className="add-task-btn"
        >
          <span>+</span>
          Add Task
        </button>
      </div>

      <div className="filters">
        <SearchBox search={search} setSearch={setSearch} />
        <SelectBox
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
      </div>

      <div className="tasks">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              setEditObj={setEditObj}
              setIsModalOpen={setIsModalOpen}
            />
          ))
        ) : (
          <EmptyState setIsModalOpen={setIsModalOpen} setEditObj={setEditObj} />
        )}
      </div>
      {isModalOpen && (
        <AddTaskForm
          addTask={addTask}
          setIsModalOpen={setIsModalOpen}
          editObj={editObj}
          editTask={editTask}
        />
      )}
    </div>
  );
};

export default Tasks;
