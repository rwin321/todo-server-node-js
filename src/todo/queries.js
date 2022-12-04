const getTodos = "SELECT * FROM todos";
const getTodoById = "SELECT * FROM todos WHERE id = $1";
const addTodo =
  "INSERT INTO todos (title, subtitle, created) VALUES ($1, $2, $3)";
const deleteTodo = "DELETE FROM todos WHERE id = $1"
const updateTodo = `
  UPDATE todos
  SET title = $2, subtitle = $3
  WHERE id = $1;
`
module.exports = {
  getTodos,
  getTodoById,
  addTodo,
  deleteTodo,
  updateTodo
};
