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
                          password TEXT 
              )`);
      db.run(`CREATE TABLE IF NOT EXISTS Book(
                        specialID INTEGER PRIMARY KEY UNIQUE,
                        bookID INTEGER ,
                        entity INTEGER NOT NULL,
                        title TEXT NOT NULL,
                        author TEXT NOT NULL,
                        description TEXT ,
                        isBorrowed BOOLEAN NOT NULL ,
                        borrowerID INTEGER

                        
                        
            )`);
    });
  }
});

module.exports = db;
