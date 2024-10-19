const db = require('../db/db')

exports.getChallenge = () =>{
    return new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM challengedb`, (err, result) =>{
            if(err) reject(err)
                else(resolve(result))
        })
    })
}
exports.getDetail = (id) =>{
    return new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM challengedb where idx = ?`,id, (err, result) =>{
            if(err) reject(err)
                else(resolve(result))
        })
    })
}