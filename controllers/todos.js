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
  let idx;
  for (let i = 0; i < Todo.arr.length; i++) {
    if (Todo.arr[i] === req.body.todo) {
      idx = i;
      break;
    }
  }
  Todo.arr.splice(idx, 1);
  res.render("index", {
    todos: Todo.arr,
  });
}
