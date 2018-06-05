const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = 'INSERT INTO sensor (dt_compra, dt_descarte, ds_codigo_rastreador, fg_ativo, id_estacionamento, id_tipo_sensor) VALUES (#, #, \'#\', #, #, #);'
            .replace('#', data.dtCompra)
            .replace('#', data.dtDescarte)
            .replace('#', data.dsCodigoRastreador)
            .replace('#', data.fgAtivo)
            .replace('#', data.idEstacionamento)
            .replace('#', data.idTipoSensor);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = 'UPDATE sensor SET dt_compra = #, dt_descarte = #, ds_codigo_rastreador = #, fg_ativo = #, id_estacionamento = #, id_tipo_sensor = # WHERE id_sensor = #;'
            .replace('#', data.dtCompra)
            .replace('#', data.dtDescarte)
            .replace('#', data.dsCodigoRastreador)
            .replace('#', data.fgAtivo)
            .replace('#', data.idEstacionamento)
            .replace('#', data.idTipoSensor)
            .replace('#', data.idSensor);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT 
            id_sensor AS idSensor,
            dt_compra AS dtCompra,
            dt_descarte AS dtDescarte,
            ds_codigo_rastreador AS dsCodigoRastreador,
            fg_ativo AS fgAtivo,
            id_estacionamento AS idEstacionamento,
            id_tipo_sensor AS idTipoSensor 
            FROM sensor;`;

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        const query = `SELECT 
            id_sensor AS idSensor,
            dt_compra AS dtCompra,
            dt_descarte AS dtDescarte,
            ds_codigo_rastreador AS dsCodigoRastreador,
            fg_ativo AS fgAtivo,
            id_estacionamento AS idEstacionamento,
            id_tipo_sensor AS idTipoSensor 
            FROM sensor 
            WHERE id_sensor = # LIMIT 1;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = 'DELETE FROM sensor WHERE id_sensor = #;'.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
