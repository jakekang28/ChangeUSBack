const db = require('../db/db'); 

exports.signUp = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO userdb (nickname, userPw) VALUES (?, ?) `, [data[0], data[1]], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

exports.getUser = (userId) => {
    
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM userdb where nickname = ?`, userId, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};
exports.getUserScore = (nickname) =>{
    return new Promise((resolve, reject) =>{
        db.query(`SELECT score FROM userdb where nickname = ?`, nickname, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    })
}
exports.putUserScore = (nickname, userScore) =>{
    return new Promise((resolve, reject) =>{
        db.query(`UPDATE userdb SET score = ? WHERE nickname = ?;`, [userScore, nickname], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    })
}
exports.getTotalScore = () =>{
    return new Promise((resolve, reject) =>{
        db.query(`SELECT SUM(score) FROM userdb`, (err, result) =>{
            if(err) reject(err)
                else resolve(result)
        })
    })
}