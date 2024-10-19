const uploadDB = require('../models/uploadDB')
const multer = require('multer')
const path = require('path')
exports.upload = async (req, res) =>{
    try{
        console.log(req.body, req.file)
        const data = req.body
        const imgsrc = req.file.filename
        if(imgsrc === undefined){
            throw new Error('이미지를 첨부하세요.')
        }
        if(data === undefined){
            throw new Error('챌린지에 관한 설명을 작성해주세요.')
        }
        const upload = await uploadDB.upload(data, imgsrc)
        res.status(200).json('챌린지가 등록되었습니다!')
    }
    catch(err){
        if(err instanceof TypeError){
            res.status(501).json(err)
        }
    }
}
exports.getNewestChallenge = async (req, res) =>{
    try{
        const data = await uploadDB.getNewestChallenge()
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
}