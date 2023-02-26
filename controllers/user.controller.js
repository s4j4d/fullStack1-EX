const { StatusCodes } = require("http-status-codes"),
  db = require("../db");

exports.register = (req, res) => {
  const { username } = req.body;

  if (!username) {
    res.writeHead(StatusCodes.BAD_REQUEST);

    return res.json({
      error: true,

      message: "username ejbari ast!",
    });
  } else {
    db.run(`INSERT INTO User(username) VALUES(?)`, [username], (err) => {
      if (err) {
        return res.json({
          error: true,

          message: err.message,
        });
      } else {
        res.writeHead(StatusCodes.CREATED);

        return res.end("user sakhte shod");
      }
    });
  }
};
