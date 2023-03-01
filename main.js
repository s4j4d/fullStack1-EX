const http = require("http"),
  route = require("./routes"),
  userController = require("./controllers/user.controller"),
  bookController = require("./controllers/book.controller"),
  lendController = require('./controllers/lend.controller');

const PORT = process.env.PORT || 3000;

// user routes : register , user-detail - user-list -user books

route.post("/user/register", userController.register);
route.get("/user/user-list", userController.userList);
route.get("/user/user-detail", userController.getUser);
route.get("/user/user-books", {});

// book routes : add book ,  , book list, book detail
route.post("/book/new-Book", bookController.addBook); // error dare
route.put("/borrowBook", {});
route.get("/book/book-detail", bookController.findBookObj);

// lend book routes: 
route.post("/lend/lendBook", lendController.lendBook)

const server = http.createServer(route.handler);
server.listen(PORT, () => {
  console.log(`run server on port ${PORT}`);
});
