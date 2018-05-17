const app = require('./config/express');
const tipoSensorRouter = require('./router/tipo-sensor');

tipoSensorRouter.map();

app.listen(3000);
