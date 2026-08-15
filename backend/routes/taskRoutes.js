const express = require("express");
const router = express.Router();
const {
  addTask,
  updateTask,
  deleteTask,
  getTasks,
  getTask,
} = require("../controllers/taskController");

router.get("/api/tasks", getTasks);
router.get("/api/tasks/:id", getTask);
router.post("/api/tasks", addTask);
router.put("/api/tasks/:id", updateTask);
router.delete("/api/tasks/:id", deleteTask);

module.exports = router