const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = `INSERT INTO funcionario_quadra (id_quadra, id_funcionario) VALUES (#, #);`
            .replace('#', data.idQuadra)
            .replace('#', data.idFuncionario);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = `UPDATE funcionario_quadra SET id_quadra = #, id_funcionario = # WHERE id_funcionario_quadra = #;`
            .replace('#', data.idQuadra)
            .replace('#', data.idFuncionario)
            .replace('#', data.idFuncionarioQuadra);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT 
        id_funcionario_quadra as idFuncionarioQuadra,  
        id_funcionario as idFuncionario, 
        id_quadra as idQuadra FROM funcionario_quadra;`;

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        const query = `SELECT 
        id_funcionario_quadra as idFuncionarioQuadra,  
        id_funcionario as idFuncionario, 
        id_quadra as idQuadra FROM funcionario_quadra 
        WHERE id_funcionario_quadra = #;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = 'DELETE FROM funcionario_quadra WHERE id_funcionario_quadra = #;'.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
