const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = `INSERT INTO bairro_rua (id_bairro, id_rua) VALUES (#, #);`
            .replace('#', data.idBairro)
            .replace('#', data.idRua);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = `UPDATE bairro_rua SET id_bairro = #, id_rua = # WHERE id_bairro_rua = #;`
            .replace('#', data.idBairro)
            .replace('#', data.idRua)
            .replace('#', data.idBairroRua);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT id_bairro_rua as idBairroRua, id_bairro as idBairro, id_rua as idRua FROM bairro_rua;`;

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        const query = `SELECT id_bairro_rua as idBairroRua, id_bairro as idBairro, id_rua as idRua FROM bairro_rua 
        WHERE id_bairro_rua = #;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = `DELETE FROM bairro_rua WHERE id_bairro_rua = #;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
