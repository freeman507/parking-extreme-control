const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = `INSERT INTO rua (ds_rua, nr_rua) VALUES ('#', #);`
            .replace('#', data.dsRua)
            .replace('#', data.nrRua);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = `UPDATE rua SET ds_rua = '#', nr_rua = # WHERE id_rua = #;`
            .replace('#', data.dsRua)
            .replace('#', data.nrRua)
            .replace('#', data.idRua);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT 
        id_rua as idRua,
        ds_rua as dsRua,
        nr_rua as nrRua FROM rua;`

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {


        const query = `SELECT 
        id_rua as idRua,
        ds_rua as dsRua,
        nr_rua as nrRua FROM rua WHERE id_rua = #;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = 'DELETE FROM rua WHERE id_rua = #;'.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
