const TipoSensor = require('../model/tipo-sensor');
const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const model = new TipoSensor({
            ds_tipo_sensor: data.dsTipoSensor,
            tp_tipo_sensor: data.tpTipoSensor
        });

        dao.save(model, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        console.log(1, data)

        const model = new TipoSensor({
            id_tipo_sensor: data.idTipoSensor,
            ds_tipo_sensor: data.dsTipoSensor,
            tp_tipo_sensor: data.tpTipoSensor
        });

        dao.update(model, data.idTipoSensor, onSuccess, onError);

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
