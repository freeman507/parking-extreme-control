const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = 'INSERT INTO pessoa (ds_nome, ds_cpf, dt_nascimento, ds_telefone, ds_celular, ds_email)values (\'#\',\'#\',#,\'#\',\'#\',\'#\');'
            .replace('#', data.dsNome)
            .replace('#', data.dsCpf)
            .replace('#', data.dtNascimento)
            .replace('#', data.dsTelefone)
            .replace('#', data.dsCelular)
            .replace('#', data.dsEmail);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = 'UPDATE pessoa SET ds_nome = \'#\', ds_cpf = \'#\', dt_nascimento = #, ds_telefone = \'#\', ds_celular = \'#\', ds_email = \'#\' WHERE id_pessoa = #;'
            .replace('#', data.dsNome)
            .replace('#', data.dsCpf)
            .replace('#', data.dtNascimento)
            .replace('#', data.dsTelefone)
            .replace('#', data.dsCelular)
            .replace('#', data.dsEmail);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT
        id_pessoa as idPessoa,
        ds_nome as dsNome,
        ds_cpf as dsCpf,
        dt_nascimento as dtNascimento,
        ds_telefone as dsTelefone,
        ds_celular as dsCelular,
        ds_email as dsEmail 
        FROM pessoa;`

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        const query = `SELECT
        id_pessoa as idPessoa,
        ds_nome as dsNome,
        ds_cpf as dsCpf,
        dt_nascimento as dtNascimento,
        ds_telefone as dsTelefone,
        ds_celular as dsCelular,
        ds_email as dsEmail 
        FROM pessoa WHERE id_pessoa = # LIMIT 1;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = 'DELETE FROM pessoa WHERE id_pessoa = #;'.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
