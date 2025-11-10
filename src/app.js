// src/app.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const routes = require("./routes");

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Express App!" });
});

// Register all routes
app.use(routes);

// Example POST test route
app.post("/data", (req, res) => {
  res.json({
    message: "JSON received successfully",
    received: req.body,
  });
});

// Optional global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;
