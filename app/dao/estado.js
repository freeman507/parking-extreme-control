const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = 'INSERT INTO estado (ds_estado, sg_estado) VALUES (\'#\', \'#\');'
            .replace('#', data.dsEstado)
            .replace('#', data.sgEstado);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = 'UPDATE estado SET ds_estado = \'#\', sg_estado = \'#\' WHERE id_estado = #;'
            .replace('#', data.dsEstado)
            .replace('#', data.sgEstado)
            .replace('#', data.idEstado);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT 
            id_estado AS idEstado,
            ds_estado AS dsEstado,
            sg_estado AS sgEstado 
            FROM estado;`;

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        const query = `SELECT 
            id_estado AS idEstado,
            ds_estado AS dsEstado,
            sg_estado AS sgEstado 
            FROM estado
            WHERE id_estado = # LIMIT 1;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = 'DELETE FROM estado WHERE id_estado = #;'.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
