import { useState } from "react";
import EmptyState from "../components/ui/EmptyState";
import SearchBox from "../components/ui/SearchBox";
import SelectBox from "../components/ui/SelectBox";
import TaskCard from "../components/ui/TaskCard";
import AddTaskForm from "../components/ui/AddTaskForm";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Practice useState and useEffect",
      status: "pending",
      createdAt: "27/07/2026",
    },
    {
      id: 2,
      title: "Learn JS",
      description: "Practice TP",
      status: "completed",
      createdAt: "27/07/2026",
    },
    {
      id: 3,
      title: "Learn React Native",
      description: "Practice project",
      status: "pending",
      createdAt: "27/07/2026",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) &&
      (task.status === selectedStatus || selectedStatus === "all")
  );
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="tasks-page">
      <div className="task-header">
        <div>
          <h1>Tasks</h1>
          <p>Manage your daily tasks efficiently.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="add-task-btn">
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
            <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
      {isModalOpen && (
        <AddTaskForm addTask={addTask} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default Tasks;
