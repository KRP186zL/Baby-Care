// routes/giziRoutes.js
const express = require('express');
const router = express.Router();
const giziController = require('../controller/giziController');
const multer = require('multer');
const path = require('path');

// Konfigurasi multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

router.get('/gizi', giziController.getAllGizi);
router.get('/gizi/:id', giziController.getGiziById);
router.post('/gizi', upload.single('image'), giziController.createGizi);
router.put('/gizi/:id', upload.single('image'), giziController.updateGizi);
router.delete('/gizi/:id', giziController.deleteGizi);

module.exports = router;
