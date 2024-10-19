const express = require('express');
const router = express.Router();
const multer = require('multer')
const uploadController = require('../controllers/upload');
const path = require('path')
const upload = multer({
    storage: multer.diskStorage({ 
        destination(req, file, done) { 
            done(null, 'uploads/'); 
        },
        filename(req, file, done) { 
            const ext = path.extname(file.originalname); 
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); 
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 }
})
router.post('/', upload.single('image'), uploadController.upload)
router.get('/',uploadController.getNewestChallenge)

module.exports = router;