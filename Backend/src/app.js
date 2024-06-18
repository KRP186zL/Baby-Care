const express = require('express');
const app = express();
const giziRoutes = require('./routes/giziRoutes');
const port = 3000;

// Middleware untuk mengizinkan akses ke gambar
app.use('/images', express.static('images'));

app.use('/api', giziRoutes);

// Middleware untuk menangani kesalahan global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan pada server'
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
