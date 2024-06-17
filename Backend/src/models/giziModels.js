let giziData = [];

const Gizi = {
    getAll: (callback) => {
        callback(null, giziData);
    },
    getById: (id, callback)=> {
        const gizi = giziData.find(item => item.id === parseInt(id));
        callback(null, gizi);
    },
    create: (newGizi, callback)=> {
        newGizi.id = giziData.length ? giziData[giziData.length -1].id + 1 : 1;
        giziData.push(newGizi);
        callback(null, newGizi);
    },
    update: (id, updateGizi, callback)=> {
        const index = giziData.findIndex(item => item.id === parseInt(id));
        if (index === -1) {
            callback(new Error('Data gizi tidak ditemukan'));
        } else {
            updateGizi.id = parseInt(id);
            giziData[index] = updateGizi;
            callback(null, updateGizi);
        }
    },
    delete: (id, callback)=> {
        const index = giziData.findIndex(item => item.id === parseInt(id));
        if(index === -1){
            callback(new Error('Data gizi tidak ditemukan'));
        } else {
            giziData.splice(index, 1);
            callback(null, {message: `Data gizi dengan ID ${id} telah dihapus`});
        }
    }
};
module.exports = Gizi;