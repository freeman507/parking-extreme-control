const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = `INSERT INTO cidade (ds_cidade, id_estado) 
        VALUES ('#', #);`.replace('#', data.dsCidade).replace('#', data.idEstado);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = `UPDATE cidade SET ds_cidade = '#', id_estado = # 
        WHERE id_cidade = #`
            .replace('#', data.dsCidade)
            .replace('#', data.idEstado)
            .replace('#', data.idCidade);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT id_cidade as idCidade, ds_cidade as dsCidade, id_estado as idEstado 
        FROM cidade;`;

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        const query = `SELECT id_cidade as idCidade, ds_cidade as dsCidade, id_estado as idEstado 
        FROM cidade WHERE id_cidade = #;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = `DELETE FROM cidade WHERE id_cidade = #;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
