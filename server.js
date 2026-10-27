import express from "express";

const app = express();
const PORT = 3000;

app.get("/termux", (req, res) => {
  res.send("Hello, I'm Termux!");
});
app.get("/world", (req, res) => {
  res.send("Hello, World!");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});