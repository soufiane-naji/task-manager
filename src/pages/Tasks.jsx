import EmptyState from "../components/ui/EmptyState";
import SearchBox from "../components/ui/SearchBox";
import SelectBox from "../components/ui/SelectBox";
import TaskCard from "../components/ui/TaskCard";
import AddTaskForm from "../components/ui/AddTaskForm";
import useTasks from "../hooks/useTasks";
import { useState } from "react";

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
  } = useTasks();

  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) &&
      (task.status === selectedStatus || selectedStatus === "all")
  );

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
