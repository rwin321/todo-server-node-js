const getTodos = "SELECT * FROM todos";
const getTodoById = "SELECT * FROM todos WHERE id = $1";
const addTodo =
  "INSERT INTO todos (title, description, created) VALUES ($1, $2, $3)";

module.exports = {
  getTodos,
  getTodoById,
  addTodo,
};
