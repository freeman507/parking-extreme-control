const mysql = require('./config/mysql');
const app = require('./config/express');

require('./router/tipo-sensor');

mysql.connect();
app.listen(3000);
