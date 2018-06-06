const mysql = require('./config/mysql');
const app = require('./config/express');

require('./router/tipo-sensor');
require('./router/estado');
require('./router/cidade');
require('./router/conta');
require('./router/estacionamento');
require('./router/funcionario');
require('./router/pessoa');
require('./router/quadra');
require('./router/sensor');
require('./router/tipo-sensor');
require('./router/usuario');
require('./router/veiculo');
require('./router/bairro');
require('./router/rua');

mysql.connect();
app.listen(3000);
