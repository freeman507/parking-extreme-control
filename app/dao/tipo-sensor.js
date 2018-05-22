const TipoSensor = require('../model/tipo-sensor');
const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const model = new TipoSensor(data);

        dao.save(model, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const model = new TipoSensor(data);

        dao.update(model, data.id_tipo_sensor, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const model = new TipoSensor();

        dao.findAll(model, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        const model = new TipoSensor();

        dao.findById(model, id, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const model = new TipoSensor();

        dao.remove(model, id, onSuccess, onError);

    },

};
