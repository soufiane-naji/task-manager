import EmptyState from "../components/ui/EmptyState";
import SearchBox from "../components/ui/SearchBox";
import SelectBox from "../components/ui/SelectBox";
import TaskCard from "../components/ui/TaskCard";
import AddTaskForm from "../components/ui/AddTaskForm";
import useTasks from "../hooks/useTasks";
import { useState } from "react";
import ConfirmationModal from "../components/ui/ConfirmationModal";
import SortBox from "../components/ui/SortBox";

const Tasks = () => {
  const {
    tasks,
    deleteTask,
    addTask,
    editTask,
    editObj,
    setEditObj,
    isModalOpen,
    setIsModalOpen,
    toggle,
    isConfirmModalOpen,
    setIsConfirmModalOpen,
  } = useTasks();

  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [idTaskDelete, setIdTaskDelete] = useState(null);
  const [sortBy, setSortBy] = useState("newest");

  const filteredTasks = [...tasks]
    .filter(
      (task) =>
        task.title.toLowerCase().includes(search.toLowerCase()) &&
        (task.status === selectedStatus || selectedStatus === "all")
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "oldest":
          return new Date(a.createdAt) - new Date(b.createdAt);
        case "a":
          return a.title.localeCompare(b.title);
        case "z":
          return b.title.localeCompare(a.title);
        case "completed":
          return a.status === "completed" ? -1 : 1;
        case "pending":
          return a.status === "pending" ? -1 : 1;
        default:
          return 0;
      }
    });

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
        <SortBox sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <div className="tasks">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              setEditObj={setEditObj}
              setIsModalOpen={setIsModalOpen}
              toggle={toggle}
              setIsConfirmModalOpen={setIsConfirmModalOpen}
              setIdTaskDelete={setIdTaskDelete}
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
      {isConfirmModalOpen && (
        <ConfirmationModal
          idTaskDelete={idTaskDelete}
          deleteTask={deleteTask}
          setIsConfirmModalOpen={setIsConfirmModalOpen}
        />
      )}
    </div>
  );
};

export default Tasks;
