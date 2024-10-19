const quizDB = require('../models/quizDB')

exports.loadQuiz = async (req, res) =>{
    
    try{
        const getQuiz = await quizDB.getQuiz()
        res.send(getQuiz)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}
exports.loadDetail = async (req, res) =>{
    try{
        const id = req.params.id
        const detail = await quizDB.getDetail(id)
        res.send(detail)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}