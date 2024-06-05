const Gizi = require('../models/giziModels');

const responseSucces = (res, message, data) => {
    res.status(200).json({
        status: 'success',
        message: message,
        data: data
    });
};

const responseError = (res, statusCode, message) => {
    res.status(statusCode).json({
        status: 'error',
        message: message
    });
};

const getAllGizi = (req, res) => {
    Gizi.getAll((err, results) => {
        if(err) {
            responseError(res, 500, err.message);
        } else {
            responseSucces(res, 'Data gizi Di Temukan!', results);
        }
    });
};

const getGiziById = (req, res)=> {
    const id = req.params.id;
    Gizi.getById(id, (err, result)=> {
        if(err) {
            responseError(res, 500, err.message);
        } else if (!result) {
            responseError(res, 404, 'Data gizi tidak ditemukan!');
        } else {
            responseSucces(res, `Data gizi dengan ID ${id} berhasil ditemukan`, result);
        }
    });
};

const createGizi = (req, res) => {
    const newGizi = {
        ImageUrl: req.file ? `/uploads/${req.file.filename}` : null,
        Title: req.body.Title,
        Description: req.body.Description,
        Nutrient: req.body.Nutrient,
        Benefit: req.body.Benefit,
        Source: req.body.Source
    };
    Gizi.create(newGizi, (err, result)=> {
        if(err) {
            responseError(res, 500, err.message);
        } else {
            responseSucces(res, 'Data Gizi berhasil ditambahkan', result);
        }
    });
};

const updateGizi = (req, res)=> {
    const id = req.params.id;
    const updateGizi = {
        ImageUrl: req.file ? `/uploads/${req.file.filename}` : null,
        Title: req.body.Title,
        Description: req.body.Description,
        Nutrient: req.body.Nutrient,
        Benefit: req.body.Benefit,
        Source: req.body.Source
    };
    Gizi.update(id, updateGizi, (err, result) => {
        if(err) {
            responseError(res, 500, err.message);
        }else if (!result.affectedRows) {
            responseError(res, 404, `Data gizi dengan ID ${id} tidak ditemukan`);
        } else {
            responseSucces(res, `Data gizi dengan ID ${id} berhasil diperbarui`, result);
        }
    });
};

const deleteGizi = (req, res)=> {
    const id = req.params.id;
    Gizi.delete(id, (err, result)=> {
        if (err) {
            responseError(res, 500, err.message);
        }else if (!result.affectedRows){
            responseError(res, 404, `Data gizi dengan ID ${id} tidak ditemukan`);
        } else {
            responseSucces(res, `Data gizi dengan ID ${id} tidak ditemukan`, result);
        }
    });
};

module.exports = {
    getAllGizi,
    getGiziById,
    createGizi,
    updateGizi,
    deleteGizi
};
