const mysqlModel = require('mysql-model');

const AppModel = mysqlModel.createConnection({
    host     : '127.0.0.1',
    port     : '3306',
    user     : 'root',
    // password : '123',
    database : 'parking_extreme_control',
  });

module.exports = AppModel;
