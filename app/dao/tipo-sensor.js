const TipoSensor = require('../model/tipo-sensor');

module.exports = {

    insert: (data) => {

        return new Promise((resolve, reject) => {

            const model = new TipoSensor({
                ds_tipo_sensor: data.dsTipoSensor,
                tp_tipo_sensor: data.tpTipoSensor
            });

            model.save((error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });

        });

    },

    update: (data) => {

        return new Promise((resolve, reject) => {

            const model = new TipoSensor({
                id_tipo_sensor: data.idTipoSensor,
                ds_tipo_sensor: data.dsTipoSensor,
                tp_tipo_sensor: data.tpTipoSensor
            });

            model.save((error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });

        });

    },

    find: () => {

        return new Promise((resolve, reject) => {

            const model = new TipoSensor();

            model.find((error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });

        });

    },

    findOne: (id) => {

        return new Promise((resolve, reject) => {

            const model = new TipoSensor();

            model.find('first', { where: 'id = '.concat(id) }, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });

        });

    },

    delete: (data) => {

        return new Promise((resolve, reject) => {

            const model = new TipoSensor();

            model.remove('id = '.concat(id), (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });

        });

    },

};
