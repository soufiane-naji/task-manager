import { useEffect, useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [editObj, setEditObj] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  return {
    tasks,
    deleteTask,
    addTask,
    editTask,
    editObj,
    setEditObj,
    isModalOpen,
    setIsModalOpen,
  };
};

export default useTasks;
