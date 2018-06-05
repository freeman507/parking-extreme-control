const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = 'INSERT INTO bairro (ds_bairro, id_cidade) VALUES (\'#\', #);'
            .replace('#', data.dsBairro)
            .replace('#', data.idCidade);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = 'UPDATE bairro SET ds_bairro = \'#\', id_cidade = # WHERE id_bairro = #;'
            .replace('#', data.dsBairro)
            .replace('#', data.idCidade)
            .replace('#', data.idBairro);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT 
            id_bairro AS idBairro,
            ds_bairro AS dsBairro,
            id_cidade AS idCidade 
            FROM bairro;`;

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        const query = `SELECT 
            id_bairro AS idBairro,
            ds_bairro AS dsBairro,
            id_cidade AS idCidade 
            FROM bairro 
            WHERE id_bairro = # LIMIT 1;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = 'DELETE FROM bairro WHERE id_bairro = #;'.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
