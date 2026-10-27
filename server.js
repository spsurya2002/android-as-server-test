import express from "express";

const app = express();
const PORT = 3000;

app.get("/termux", (req, res) => {
  res.send("Hello, I'm Termux!");
});

app.get("/world", (req, res) => {
  res.send("Hello, World!");
});

// Query version: GET /hello?name=termux
app.get("/hello", (req, res) => {
  const name = req.query.name || "stranger";
  res.send(`Hello, ${name}!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});