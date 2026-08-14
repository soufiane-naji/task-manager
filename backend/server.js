const cors = require("cors")
const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors())
app.use(express.json());

connectDB()

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
