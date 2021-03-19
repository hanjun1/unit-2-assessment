module.exports = {
  index,
  create,
  delete: deleteTodo,
};

let Todo = require("../data/todos");

function index(req, res) {
  res.render("index", {
    todos: Todo.arr,
  });
}

function create(req, res) {
  let obj = {
    todo: req.body.todo,
    done: false,
  };
  Todo.arr.push(obj);
  res.render("index", {
    todos: Todo.arr,
  });
}

function deleteTodo(req, res) {
  Todo.arr.splice(req.body.todo, 1);
  res.redirect("/");
}
