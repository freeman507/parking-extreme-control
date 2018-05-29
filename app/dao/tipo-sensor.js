const mysql = require('./../config/mysql');
const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = 'INSERT INTO tipo_sensor (ds_tipo_sensor, tp_tipo_sensor) VALUES (\'#\', #);'
            .replace('#', data.dsTipoSensor)
            .replace('#', data.tpTipoSensor);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = 'UPDATE tipo_sensor SET ds_tipo_sensor = \'#\', tp_tipo_sensor = # WHERE id_tipo_sensor = #;'
            .replace('#', data.dsTipoSensor)
            .replace('#', data.tpTipoSensor)
            .replace('#', data.idTipoSensor);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT 
            id_tipo_sensor AS idTipoSensor,
            ds_tipo_sensor AS dsTipoSensor,
            tp_tipo_sensor AS tpTipoSensor 
            FROM tipo_sensor;`;

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        const query = `SELECT 
            id_tipo_sensor AS idTipoSensor,
            ds_tipo_sensor AS dsTipoSensor,
            tp_tipo_sensor AS tpTipoSensor 
            FROM tipo_sensor
            WHERE id_tipo_sensor = # LIMIT 1;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = 'DELETE FROM tipo_sensor WHERE id_tipo_sensor = #;'.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
