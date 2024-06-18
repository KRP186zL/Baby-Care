const giziData = require('../data/giziData');

const Gizi = {
    getAll: (callback)=> {
        callback(null, giziData);
    },
    getById: (id, callback)=> {
        const gizi = giziData.find(item=> item.id === parseInt(id));
        callback(null, gizi);
    }
};
module.exports = Gizi;