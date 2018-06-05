const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = `INSERT INTO quadra (nr_quadra, id_rua) VALUES (#,#);`
            .replace('#', data.nrQuadra)
            .replace('#', data.idRua);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = `UPDATE quadra SET nr_quadra = #, id_rua = # WHERE id_quadra = #;`
            .replace('#', data.nrQuadra)
            .replace('#', data.idRua)
            .replace('#', data.idQuadra);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT 
        id_quadra as idQuadra,
        nr_quadra as nrQuadra,
        id_rua as idRua FROM quadra;`

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {


        const query = `SELECT id_quadra as idQuadra, nr_quadra as nrQuadra, id_rua as idRua FROM quadra WHERE id_rua = # LIMIT 1;`
            .replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = 'DELETE FROM quadra WHERE id_quadra = #;'.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
