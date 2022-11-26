const express = require("express");
const todosRoute = require("./src/todo/routes");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/v1/todos", todosRoute);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
