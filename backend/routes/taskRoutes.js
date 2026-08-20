const express = require("express");
const router = express.Router();
const {
  addTask,
  updateTask,
  deleteTask,
  getTasks,
  getTask,
} = require("../controllers/taskController");

router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
