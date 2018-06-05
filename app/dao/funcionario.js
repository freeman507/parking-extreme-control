const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = 'INSERT INTO funcionario (ds_cargo, dt_admissao, dt_demissao, id_pessoa) VALUES (\'#\', #, #, #);'
            .replace('#', data.dsCargo)
            .replace('#', data.dtAdmissao)
            .replace('#', data.dtDemissao)
            .replace('#', data.idPessoa);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = 'UPDATE funcionario SET ds_cargo = #, dt_admissao = #, dt_demissao = #, id_pessoa = # WHERE id_funcionario = #;'
            .replace('#', data.dsCargo)
            .replace('#', data.dtAdmissao)
            .replace('#', data.dtDemissao)
            .replace('#', data.idPessoa)
            .replace('#', data.idFuncionario);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT 
            id_funcionario AS idFuncionario,
            ds_cargo AS dsCargo,
            dt_admissao AS dtAdmissao,
            dt_demissao AS dtDemissao,
            id_pessoa AS idPessoa 
            FROM funcionario;`;

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        const query = `SELECT 
            id_funcionario AS idFuncionario,
            ds_cargo AS dsCargo,
            dt_admissao AS dtAdmissao,
            dt_demissao AS dtDemissao,
            id_pessoa AS idPessoa 
            FROM funcionario 
            WHERE id_funcionario = # LIMIT 1;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = 'DELETE FROM funcionario WHERE id_funcionario = #;'.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
