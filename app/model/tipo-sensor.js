const AppModel = require('../config/connection');

const TipoSensor = AppModel.extend({
    tableName: 'tipo_sensor',
    getId: () => 'id_tipo_sensor'
});

module.exports = TipoSensor;
