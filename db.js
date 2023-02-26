const sqlite3 = require("sqlite3").verbose();
const DBFILENAME = "libraryDB.sqlite3";

const db = new sqlite3.Database(DBFILENAME,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connected to db...");

        db.serialize(()=>{
            db.run(`CREATE TABLE IF NOT EXISTS Book(
                        bookID INTEGER PRIMARY KEY,
                        number INTEGER NOT NULL,
                        title TEXT NOT NULL,
                        description TEXT 
                        
            )`);
            db.run(`CREATE TABLE IF NOT EXISTS User(
                        userID INTEGER NOT NULL UNIQUE,
                        username TEXT NOT NULL ,
                        password TEXT 
            )`)
        })
    }
})

module.exports = db;