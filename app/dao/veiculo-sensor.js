const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = 'INSERT INTO veiculo_sensor (id_sensor, id_veiculo) VALUES (#, #);'
            .replace('#', data.idSensor)
            .replace('#', data.idVeiculo);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = 'UPDATE veiculo_sensor SET id_sensor = #, id_veiculo = # WHERE id_veiculo_sensor = #;'
            .replace('#', data.idSensor)
            .replace('#', data.idVeiculo)
            .replace('#', data.idVeiculoSensor);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT 
            id_veiculo_sensor AS idVeiculoSensor,
            id_sensor AS idSensor,
            id_veiculo AS idVeiculo 
            FROM veiculo_sensor;`;

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        const query = `SELECT 
            id_veiculo_sensor AS idVeiculoSensor,
            id_sensor AS idSensor,
            id_veiculo AS idVeiculo 
            FROM veiculo_sensor 
            WHERE id_veiculo_sensor = # LIMIT 1;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = 'DELETE FROM veiculo_sensor WHERE id_veiculo_sensor = #;'.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
