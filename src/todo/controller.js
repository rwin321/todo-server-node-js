const pool = require("../../db");
const queries = require("./queries");

const getTodos = (req, res) => {
  pool.query(queries.getTodos, (err, results) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.status(200).json(results.rows);
    }
  });
};

const addTodo = (req, res) => {
  const { title, description } = req.body;

  const created = new Date().toISOString();

  pool.query(
    queries.addTodo,
    [title, description, created],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("Todo was successfully added");
    }
  );
};

const deleteTodo = (res, req) => {
  const id = parseInt(req.params.id);

  pool.query(queries.deleteTodo, [id], (error, results) => {});
};

const getTodoById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getTodoById, [id], (err, results) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.status(200).json(results.rows);
    }
  });
};

module.exports = {
  getTodos,
  getTodoById,
  addTodo,
};
