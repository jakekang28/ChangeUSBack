const db = require('../db/db')

exports.getQuiz = () =>{
    return new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM quizdb`, (err, result) =>{
            if(err) reject(err)
                else(resolve(result))
        })
    })
}
exports.getDetail = (id) =>{
    return new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM quizdb where idx = ?`,id, (err, result) =>{
            if(err) reject(err)
                else(resolve(result))
        })
    })
}