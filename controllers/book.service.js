const db = require('../db')

function createBook(bookObj){
    const{bookID,title, author } = bookObj;
    return new Promise((resolve, reject) => {
        db.run(
          `INSERT INTO Book(bookID, title, author, isBorrowed) VALUES(?, ?, ? ,?)`,
          [bookID, title, author, false],
          (err,) => {
            if(err){
                reject(err)
            }else{
                resolve()
            }
          }
        );
    })

    
}

function getbookByID(id){
    return new Promise((resolve, reject)=>{
        db.get("SELECT * FROM Book WHERE bookID=?", id, (err, book)=>{
            if(err){
                reject(err)
            }else{
                resolve(book)
            }
        })
    })
}

module.exports = {createBook,getbookByID}