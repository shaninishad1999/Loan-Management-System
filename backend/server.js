// server.js - Entry point of the backend

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Import routes
const userRoutes = require("./routes/userRoutes");
const loanRoutes = require("./routes/loanRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Database connection error:", err));


// Routes
app.use("/api/users", userRoutes);
app.use("/api/loans", loanRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
