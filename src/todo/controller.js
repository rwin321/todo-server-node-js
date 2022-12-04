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


const addTodo = (req, res) => {
  const { title, subtitle } = req.body;

  const created = new Date().toISOString();

  pool.query(
    queries.addTodo,
    [title, subtitle, created],
    (error) => {
      if (error) throw error;
      res.status(201).send("Todo was successfully added");
    }
  );
};

const updateTodo = (req, res) => {
  const id = parseInt(req.params.id);

  const { title, subtitle } = req.body;

  pool.query(queries.getTodoById, [id], (error, results) => {
        const noTodosFound = !results.rows.length;
        if (noTodosFound) {
          res.send("Todo doesn't exist in database")
        }

        pool.query(queries.updateTodo, [id, title, subtitle], (error) => {
          if (error) throw error;
          res.status(200).send("Todo updated successfully")
        })
      }
    )
};

const deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getTodoById, [id], (error, results) => {
    const noTodosFound = !results.rows.length;
    if (noTodosFound) {
      res.send("Todo doesn't exist in database")
    }

    pool.query(queries.deleteTodo, [id], (results, error) => {
      if (error) throw error
      res.status(200).send(`Todo ${id} removed.`)
    })
  });
};

module.exports = {
  getTodos,
  getTodoById,
  addTodo,
  deleteTodo,
  updateTodo
};
