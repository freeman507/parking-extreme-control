var AppModel = require('../config/connection');

var TipoSensor = AppModel.extend({
    tableName: 'tipo_sensor',
});

module.exports = TipoSensor;
