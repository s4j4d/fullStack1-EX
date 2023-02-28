const { contentTypes } = require("../content-types"),
  db = require("../db"),
  utils = require("../utils"),
  userService = require("./user.service"),
  { StatusCodes } = require("http-status-codes"),
  { createBook, getbookByID } = require("./book.service");

exports.findBookObj = async (req, res) => {
  if (!Object.getOwnPropertyNames(req.query).length) {
    res.writeHead(StatusCodes.BAD_REQUEST);
    return res.end("id book bayad bedi!");
  }
  const id = req.query["id"];
  const bookObj = await getbookByID(id);
  if (!bookObj) {
    res.writeHead(StatusCodes.NOT_FOUND, contentTypes.json);
    return utils.errResponse(res, "chenin book i nadarim");
  } else {
    res.json(bookObj);
  }
};

exports.addBook = async (req, res) => {
  const body = req.body;
  if (!body) {
    return utils.errResponse(err, "for create task send data");
  } else {
    try {
      const { bookID, title, author } = body;
      const bookObj = {
        bookID: bookID,
        title: title,
        author: author,
        idBorrowed: false,
      };
      await createBook(bookObj);
      res.writeHead(StatusCodes.CREATED, contentTypes.json);
      return res.json({
        err: false,
        message: `book ${title} with book id : ${bookID} created`,
      });
    } catch (error) {
      return utils.errResponse(res, error.message);
    }
  }
};
