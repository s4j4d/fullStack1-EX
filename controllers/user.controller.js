const { StatusCodes } = require("http-status-codes"),
  db = require("../db"),
  utils = require("../utils"),
  { getUserByUsername } = require("./user.service");
  const contentTypes= require('../content-types');

exports.register = (req, res) => {
  const { username } = req.body;

  if (!username) {
    res.writeHead(StatusCodes.BAD_REQUEST);

    return res.json({
      error: true,

      message: "username ejbari ast!",
    });
  } else {
    db.run(
      `INSERT INTO User(username, booksBorrowed) VALUES(?, ?)`,
      [username, 0],
      (err) => {
        if (err) {
          return res.json({
            error: true,

            message: err.message,
          });
        } else {
          res.writeHead(StatusCodes.CREATED);

          return res.end(`user ${username} sakhte shod`);
        }
      }
    );
  }
};

exports.getUser = async (req, res) => {
  //   const username = req.url.replace("/user/user-detail?username=", "");
  const username = req.query["username"];
  const userObj = await getUserByUsername(username);
  if (!userObj) {
    res.writeHead(StatusCodes.NOT_FOUND, contentTypes.json);
    return utils.errResponse(res, "chenin useri nadarim");
  } else {
    res.json(userObj);
  }
};

exports.userList = async (req, res) => {
  db.all("SELECT userID, username FROM User", (err, users) => {
    if (err) {
      throw new Error(err.message);
    } else {
      res.json(users);
    }
  });
};
