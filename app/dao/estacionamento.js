const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = `INSERT INTO estacionamento (id_quadra, id_tipo_estacionamento) 
        VALUES (#, #);`.replace('#', data.idQuadra, data.idTipoEstacionamento);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = `UPDATE estacionamento SET id_quadra = #, id_tipo_estacionamento = # 
        WHERE id_estacionamento = #;`.replace('#', data.idQuadra)
            .replace('#', data.idTipoEstacionamento)
            .replace('#', data.idEstacionamento);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT 
        id_estacionamento as idEstacionamento, 
        id_quadra as idQuadra, 
        id_tipo_estacionamento as idTipoEstacionamento 
        FROM estacionamento;`;

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        const query = `SELECT 
        id_estacionamento as idEstacionamento, 
        id_quadra as idQuadra, 
        id_tipo_estacionamento as idTipoEstacionamento 
        FROM estacionamento WHERE id_estacionamento = #`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = `DELETE FROM estacionamento WHERE id_estacionamento = #;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
