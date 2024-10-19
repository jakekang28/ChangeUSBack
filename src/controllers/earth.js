const db = require('../db/db')


const earthDB =  require('../models/earthDB')

exports.getScore =  ((req, res) =>{
    const data = earthDB.getScore()
})