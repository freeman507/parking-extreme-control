const dao = require('./dao');
const ESTACIONAMENTO_ENUM = require('./enum/tipo-estacionamento');

module.exports = {

    insert: (data, onSuccess, onError) => {

        // TODO - fazer query

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        // TODO - fazer query

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        // TODO - fazer query

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        // TODO - fazer query

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        // TODO - fazer query

        dao.exec(query, onSuccess, onError);

    }

};
