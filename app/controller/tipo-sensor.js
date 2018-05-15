var TipoSensor = require('../model/tipo-sensor');

function insert(dsTipoSensor, tpTipoSersor) {
    return new Promise(function (resolve, reject) {

        var model = new TipoSensor({
            ds_tipo_sensor: dsTipoSensor,
            tp_tipo_sensor: tpTipoSersor
        });

        model.save(reject, resolve);

    });
}

module.exports = {
    insert: insert
};
