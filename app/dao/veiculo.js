const dao = require('./dao');

module.exports = {

    insert: (data, onSuccess, onError) => {

        const query = 'INSERT INTO veiculo (ds_placa, ds_modelo, id_tipo_veiculo, id_pessoa) VALUES (\'#\', \'#\', #, #);'
            .replace('#', data.dsPlaca)
            .replace('#', data.dsModelo)
            .replace('#', data.idTipoVeiculo)
            .replace('#', data.idPessoa);

        dao.exec(query, onSuccess, onError);

    },

    update: (data, onSuccess, onError) => {

        const query = 'UPDATE veiculo SET ds_placa = \'#\', ds_modelo = \'#\', id_tipo_veiculo = #, id_pessoa = # WHERE id_veiculo = #;'
            .replace('#', data.dsPlaca)
            .replace('#', data.dsModelo)
            .replace('#', data.idTipoVeiculo)
            .replace('#', data.idPessoa)
            .replace('#', data.idVeiculo);

        dao.exec(query, onSuccess, onError);

    },

    findAll: (onSuccess, onError) => {

        const query = `SELECT 
            id_veiculo AS idVeiculo,
            ds_placa AS dsPlaca,
            ds_modelo AS dsModelo,
            id_tipo_veiculo AS idTipoVeiculo,
            id_pessoa AS idPessoa 
            FROM veiculo`;

        dao.exec(query, onSuccess, onError);

    },

    findById: (id, onSuccess, onError) => {

        const query = `SELECT 
            id_veiculo AS idVeiculo,
            ds_placa AS dsPlaca,
            ds_modelo AS dsModelo,
            id_tipo_veiculo AS idTipoVeiculo,
            id_pessoa AS idPessoa 
            FROM veiculo
            WHERE id_veiculo = # LIMIT 1;`.replace('#', id);

        dao.exec(query, onSuccess, onError);

    },

    remove: (id, onSuccess, onError) => {

        const query = 'DELETE FROM veiculo WHERE id_veiculo = #;'.replace('#', id);

        dao.exec(query, onSuccess, onError);

    }

};
