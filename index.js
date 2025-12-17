const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Express server is running 🚀");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express API" });
});

app.post("/api/data", (req, res) => {
  res.json({
    success: true,
    data: req.body,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
