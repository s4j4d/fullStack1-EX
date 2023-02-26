const sqlite3 = require("sqlite3").verbose();
const DBFILENAME = "libraryDB.sqlite3";

const db = new sqlite3.Database(DBFILENAME, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to db...");

    db.serialize(() => {
      db.run(`CREATE TABLE IF NOT EXISTS User(
                          userID INTEGER PRIMARY KEY,
                          username TEXT NOT NULL UNIQUE ,
                          password TEXT ,
                          booksBorrowed INTEGER NOT NULL CHECK (booksBorrowed IN (0,1,2,3))
              )`);
      db.run(`CREATE TABLE IF NOT EXISTS Book(
                        specialID INTEGER PRIMARY KEY UNIQUE,
                        bookID INTEGER NOT NULL ,
                        title TEXT NOT NULL,
                        author TEXT NOT NULL,
                        isBorrowed BOOLEAN NOT NULL ,
                        borrowerID INTEGER,
                        FOREIGN KEY (borrowerID)
                          REFERENCES User(userID)
                                                
            )`);
    });
  }
});

module.exports = db;
