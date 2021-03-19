var express = require("express");
var router = express.Router();

let todosCtrl = require("../controllers/todos");

router.get("/", todosCtrl.index);
router.post("/", todosCtrl.create);
router.delete("/", todosCtrl.delete);

module.exports = router;
