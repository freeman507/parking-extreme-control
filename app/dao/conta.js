const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = 'INSERT INTO conta (qt_saldo, id_pessoa, id_veiculo) VALUES (#, #, #);'
            .replace('#', data.qtSaldo)
            .replace('#', data.idPessoa)
            .replace('#', data.idVeiculo);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = 'UPDATE conta qt_saldo = #, id_pessoa = #, id_veiculo = # WHERE id_conta = #;'
            .replace('#', data.qtSaldo)
            .replace('#', data.idPessoa)
            .replace('#', data.idVeiculo)
            .replace('#', data.idConta);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT 
            id_conta AS idConta,
            qt_saldo AS qtSaldo,
            id_pessoa AS idPessoa,
            id_veiculo AS idVeiculo 
            FROM conta;`;

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        const query = `SELECT 
            id_conta AS idConta,
            qt_saldo AS qtSaldo,
            id_pessoa AS idPessoa,
            id_veiculo AS idVeiculo 
            FROM conta 
            WHERE id_conta = # LIMIT 1;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = 'DELETE FROM conta WHERE id_conta = #;'.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
