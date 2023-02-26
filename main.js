const http = require("http"),
  utils = require("./utils"),
  { contentTypes } = require("./content-types"),
  route = require("./routes"),
  userController = require("./controllers/user.controller"),
  bookController = require("./controllers/book.controller");

const PORT = process.env.PORT || 3000;

// user routes : register , user-detail - user-list -user books

route.post("/user/register", userController.register);
route.get("/user/user-list", userController.userList);
route.get("/user/user-detail", userController.getUser);
route.get("/user/user-books", {});

// book routes : add book , lend book , book list, book detail

const server = http.createServer(route.handler);
server.listen(PORT, () => {
  console.log(`run server on port ${PORT}`);
});
