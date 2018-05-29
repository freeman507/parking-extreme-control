const mysql = require('./config/mysql');
const app = require('./config/express');

require('./router/tipo-sensor');
require('./router/estado');

mysql.connect();
app.listen(3000);
