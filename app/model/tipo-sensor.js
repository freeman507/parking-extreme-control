const AppModel = require('../config/connection');

const TipoSensor = AppModel.extend({
    tableName: 'tipo_sensor',
    id: 'id_tipo_sensor'
});

module.exports = TipoSensor;
