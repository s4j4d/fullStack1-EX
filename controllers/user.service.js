const db = require("../db")

function getUserByUsername (username){
    return new Promise((resolve, reject)=>{
        db.get("SELECT * FROM User WHERE username=?", username, (err, user)=>{
            if(err){
                reject(err)
            }else{
                resolve(user)
            }
        })
    })
}
function getUserByID(id){
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM User WHERE userID=?", id, (err, user) => {
        if (err) {
          reject(err);
        } else {
          resolve(user);
        }
      });
    });
}

const numberOfBorrowedBooks= async (userID)=>{
    userObj= await getUserByID(userID)
}

module.exports= {getUserByUsername,getUserByID}