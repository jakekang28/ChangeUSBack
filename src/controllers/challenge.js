const challengeDB = require('../models/challengeDB')

exports.loadChallenge = async (req, res) =>{
    try{
        const getQuiz = await challengeDB.getChallenge()
        res.send(getChallenge)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}
exports.loadDetail = async (req, res) =>{
    try{
        const id = req.params.id
        const detail = await challengeDB.getDetail(id)
        res.send(detail)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}