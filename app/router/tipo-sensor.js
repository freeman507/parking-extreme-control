const app = require('../config/express');
const tipoSensorController = require('../controller/tipo-sensor');

const ENDPOINT = '/tipo-sensor';

app.get(ENDPOINT, (req, res) => {
    tipoSensorController.findAll(res);
});

app.get(ENDPOINT.concat('/:id'), (req, res) => {
    tipoSensorController.findById(res, req.params.id);
});

app.post(ENDPOINT, (req, res) => {
    tipoSensorController.insert(res, req.body);
});

app.delete(ENDPOINT.concat('/:id'), (req, res) => {
    tipoSensorController.remove(res, req.params.id);
});
