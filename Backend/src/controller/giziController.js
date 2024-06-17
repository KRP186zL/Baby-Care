const Gizi = require('../models/giziModels');

const responseSucces = (res, message, data)=> {
  res.status(200).json({
    status: 'success',
    message: message,
    data: data
  });
};

const responseError = (res, statusCode, message)=> {
  res.status(statusCode).json({
    status: 'error',
    message: message
  });
};

const getAllGizi = (req, res) => {
  Gizi.getAll((err, results)=> {
    if(err) {
      responseError(res, 500, err.message);
    } else {
      responseSucces(res, 'Data gizi ditemukan', results);
    }
  });
};

const getGiziById = (req, res)=> {
  const id = req.params.id;
  Gizi.getById(id, (err, results)=> {
    if (err){
      responseError(res, 500, err.message);
    }else if (!results) {
      responseError(res, 404, 'Data Gizi tidak ditemukan!!');
    } else {
      responseSucces(res, `Data gizi dengan ID ${id} berhasil ditemukan`, results);
    }
  });
};

const createGizi = (req, res)=> {
  const newGizi = {
    ImageUrl: req.file ? `/uploads/${req.file.filename}` : null,
    Title: req.body.Title,
    Description: req.body.Description,
    Nutrient: req.body.Nutrient,
    Benefit: req.body.Benefit
  };
  Gizi.create(newGizi, (err, results)=> {
    if(err){
      responseError(res, 500, err.message);
    }else {
      responseSucces(res, 'Data gizi berhasil ditambahkan', results);
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
  };
  Gizi.update(id, updateGizi, (err, results)=> {
    if(err) {
      responseError(res, 500, err.message);
    } else{
      responseSucces(res, `Data gizi dengan ID ${id} berhasil diperbarui`, results);
    }
  });
};

const deleteGizi = (req, res)=> {
  const id = req.params.id;
  Gizi.delete(id, (err, results)=> {
    if(err){
      responseError(err, 500, err.message);
    }else {
      responseSucces(res, 'Data gizi dengan ID ${id} berhasil dihapus',results);
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