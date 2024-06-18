const Gizi = require('../models/giziModels');

const responseSucces = (res, message, data)=> {
  res.status(200).json({
    status: 'succes',
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

const getAllGizi = (req,res)=> {
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
  Gizi.getById(id, (err, result)=> {
    if(err) {
      responseError(err, 500, err.message);
    }else if (!result) {
      responseError(res, 404, 'Data gizi tidak ditemukan!');
    } else {
      responseSucces(res, `Data gizi dengan ID ${id} berhasil ditemukan`, result);
    }
  });
};

module.exports = {
  getAllGizi,
  getGiziById
};