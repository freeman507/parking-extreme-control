const mysqlModel = require('mysql-model');

const AppModel = mysqlModel.createConnection({
    host     : '0.0.0.0',
    port     : '32768',
    user     : 'root',
    password : '123',
    database : 'parking_extreme_control',
  });

module.exports = AppModel;
