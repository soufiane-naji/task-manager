const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const tasksRouter = require("./routes/taskRoutes");
const errorHandling = require("./middleware/handlingError");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tasks", errorHandling, tasksRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
