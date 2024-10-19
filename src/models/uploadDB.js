const db = require('../db/db')

exports.upload = (data, imgsrc) =>{
    return new Promise((resolve, reject) =>{
        db.query(`INSERT into user_uploads VALUES (?, ?)`,[imgsrc, data], (err, result) =>{
            if(err) reject(err)
                else(resolve(result))
        })
    })
}
exports.getNewestChallenge = () =>{
    return new Promise((resolve, reject)=>{
        db.query(`SELECT * FROM user_uploads order by idx DESC limit 0, 3`, (err, result) =>{
            if(err) reject(err)
                else(resolve(result))
        })
    })
}