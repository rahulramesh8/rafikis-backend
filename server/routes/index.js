const todosController = require("../controllers").todos;
const todoItemsController = require("../controllers").todoItems;

module.exports = app => {
  //Welcome note
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Todos API!"
    })
  );
  //Get a list of todos
  app.get("/api/todos", todosController.list);
  //Get a single todo
  app.get("/api/todos/:todoId", todosController.retrieve);

  //Post a todo
  app.post("/api/todos", todosController.create);

  //Update a single todo
  app.put("/api/todos/:todoId", todosController.update);

  //Delete a single todo
  app.delete("/api/todos/:todoId", todosController.destroy);

  //Post a todo item
  app.post("/api/todos/:todoId/items", todoItemsController.create);
  //Update a todo item
  app.put("/api/todos/:todoId/items/:todoItemId", todoItemsController.update);

  //Delete a todo item
  app.delete(
    "/api/todos/:todoId/items/:todoItemId",
    todoItemsController.destroy
  );
};
