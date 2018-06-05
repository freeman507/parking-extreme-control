const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = 'INSERT INTO usuario (ds_login, ds_password, id_pessoa, id_tipo_usuario) VALUES (\'#\', \'#\', #, #);'
            .replace('#', data.dsLogin)
            .replace('#', data.dsPassword)
            .replace('#', data.idPessoa)
            .replace('#', data.idTipoUsuario);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = 'UPDATE usuario SET ds_login = \'#\', ds_password = \'#\', id_pessoa = #, id_tipo_usuario = # WHERE id_usuario = #;'
            .replace('#', data.dsLogin)
            .replace('#', data.dsPassword)
            .replace('#', data.idPessoa)
            .replace('#', data.idTipoUsuario)
            .replace('#', data.idUsuario);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT 
            id_usuario AS idUsuario,
            ds_login AS dsLogin,
            ds_password AS dsPassword,
            id_pessoa AS idPessoa,
            id_tipo_usuario AS idTipoUsuario 
            FROM usuario;`;

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        const query = `SELECT 
            id_usuario AS idUsuario,
            ds_login AS dsLogin,
            ds_password AS dsPassword,
            id_pessoa AS idPessoa,
            id_tipo_usuario AS idTipoUsuario 
            FROM usuario 
            WHERE id_usuario = # LIMIT 1;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = 'DELETE FROM usuario WHERE id_usuario = #;'.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
