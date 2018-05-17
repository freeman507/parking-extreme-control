const dao = require('../dao/tipo-sensor');

module.exports = {

    insert: (data) => {
        return dao.insert(data);
    },

    update: (data) => {
        return dao.update(data);
    },

    find: () => {
        return dao.find();
    },

    findOne: (id) => {
        return dao.findOne(id);
    },

    remove: (id) => {
        return dao.remove(id);
    },

};
