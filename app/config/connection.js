var mysqlModel = require('mysql-model');

var AppModel = mysqlModel.createConnection({
    host     : '172.17.0.4',
    port     : '3306',
    user     : 'root',
    password : '123',
    database : 'parking_extreme_control',
  });

module.exports = AppModel;
