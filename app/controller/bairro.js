const controller = require('./controller');
const bairroRuaController = require('./controller/bairro-rua');
const dao = require('./../dao/bairro');

module.exports = {

    insert: (response, data) => {

        let bairro = data.bairro;

        controller.insert(dao, response, bairro);

        this.insertBairroRua(bairro, data);
    },

    insertBairroRua: function (bairro, data) {
        const bairroRua = {
            idBairro: bairro.idBairro,
            idRua: data.idRua
        };

        bairroRuaController.insert(dao, () => {
        }, bairroRua);
    },

    update: (response, data) =>
        controller.update(dao, response, data),

    findAll: (response) =>
        controller.findAll(dao, response),

    findById: (response, id) =>
        controller.findById(dao, response, id),

    remove: (response, id) =>
        controller.remove(dao, response, id)

};
