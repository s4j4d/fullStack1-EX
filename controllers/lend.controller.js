const db = require("../db");
const { getbookByID } = require("./book.service");
const { getUserByID } = require("./user.service");
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
    const { booksBorrowed } = await getUserByID(userID);
    if ((booksBorrowed === 3)) {
      res.writeHead(StatusCodes.BAD_REQUEST);

      return res.json({
        error: true,

        message: `this user has maximum number of books that can lend from library! => ${booksBorrowed}`,
      });
    } else {
      const bookObj = await getbookByID(bookID);
      console.log(`books borrowed : ${booksBorrowed}`);
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
            WHERE bookID=${bookID}`);

        db.run(`UPDATE User
            SET booksBorrowed=${booksBorrowed+1}
            WHERE userID=${userID}`);
    }
  }
};
