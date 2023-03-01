const db = require("../db");
const { getbookByID } = require("./book.service");
 const { StatusCodes } = require("http-status-codes");

exports.lendBook = async (req, res) => {
  const { userID, bookID } = req.body;

  if (!userID) {
    res.writeHead(StatusCodes.BAD_REQUEST);

    return res.json({
      error: true,

      message: "userID ejbari ast!",
    });
  } else if (!bookID) {
    res.writeHead(StatusCodes.BAD_REQUEST);

    return res.json({
      error: true,

      message: "bookID ejbari ast!",
    });
  } else {
    const bookObj = await getbookByID(bookID);
    const bookTitle = bookObj.title;
    db.run(
      `INSERT INTO Lend(bookTitle, book, user) VALUES(?, ?, ?)`,
      [bookTitle, bookID, userID],
      (err) => {
        if (err) {
          return res.json({
            error: true,

            message: err.message,
          });
        } else {
          res.writeHead(StatusCodes.CREATED);

          return res.end(
            `book ${bookTitle} with id ${bookID} lended to userID: ${userID}`
          );
        }
      }
    );
    db.run(`UPDATE Book
            SET borrowerID=${userID}
            WHERE bookID=${bookID}`)
  }
};
