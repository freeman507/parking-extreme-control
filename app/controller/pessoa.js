const controller = require('./controller');
const dao = require('./../dao/pessoa');

module.exports = {

    insert: (response, data) =>
        controller.insert(dao, response, data),

    update: (response, data) =>
        controller.update(dao, response, data),

    findAll: (response) =>
        controller.findAll(dao, response),

    findById: (response, id) =>
        controller.findById(dao, response, id),

    remove: (response, id) =>
        controller.remove(dao, response, id)

};
