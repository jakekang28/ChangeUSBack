const db = require('../db/db')

exports.getScore = () =>{
    return new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM equip_grid`, (err, result) =>{
            if(err) reject(err)
                else(resolve(result))
        })
    })
}