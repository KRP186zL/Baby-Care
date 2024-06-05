const express = require('express');
const app = express()
const giziRoutes = require('./routes/giziRoutes');
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world')
});

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
    console.log(`Example app listening on port ${port}`)
});