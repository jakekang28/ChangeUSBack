const bcrypt = require('bcrypt');
const userDB = require('../models/userDB');
const jwt = require('jsonwebtoken')
const textToHash = async (text) => {		
    const saltRounds = 10;
    try {
        const hash = await bcrypt.hash(text, saltRounds);
        return hash
    } catch (err) {
        console.error(err);
        return err;
    }
}

exports.signup = async (req, res) => {
    const {nickname, userPW} = req.body;
    const hashtext = nickname + userPw            
    try {
        const getUser = await userDB.getUser(nickname);
        if (getUser.length){
            res.status(401).json('이미 존재하는 아이디입니다.');
            return;
        }

        const hash = await textToHash(userPW);
        const signUp = await userDB.signUp([nickname, hash]);
        res.status(200).json('가입 성공');
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};
const hashCompare = async (inputValue, hash) => {
    try {
        const isMatch = await bcrypt.compare(inputValue, hash);
        if (isMatch) return true;
        else return false;
    } catch(err) {
        console.error(err);
        return err;
    }
}

exports.loginCheck = async (req, res) => {
    console.log(req.body)
    const { nickname, userPW } = req.body;
    try {
        const hashtext = nickname + userPW
        const getUser = await userDB.getUser(nickname);
        if (!getUser.length) {
            res.status(401).json('존재하지 않는 아이디입니다.');
            return;
        }

        const blobToStr = Buffer.from(getUser[0].userPw).toString();
        const isMatch = await hashCompare(userPW, blobToStr);

        if(isMatch){
            const token = jwt.sign({nickname : nickname}, 'keys')
            res.cookie("nickname", nickname)
            return res.status(200).json('로그인 성공');
        }
        else{
            return res.status(401).json('비밀번호가 틀렸습니다.')
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}
exports.getUserScore = async (req, res) =>{
    const nickname = 'admin'
    const userScore = await userDB.getUserScore(nickname)
    res.send(userScore)
    // if(!req.cookie.userScore){
    //     const userScore = await userDB.getUserScore(nickname)
    //     res.cookie('userScore', userScore)
    //     res.send(userScore)
    // }
    // else{
    //     const userScore = req.cookie.userScore
    //     await userDB.putUserScore(nickname, userScore)
    //     res.send(userScore) 
    // }
}
exports.getTotalScore = async (req, res) =>{
    const totalScore = await userDB.getTotalScore()
    res.send(totalScore)
}