var app = require('../config/express');
var tipoSensorController = require('../controller/tipo-sensor');

var ENDPOINT = '/tipo-sensor';

app.get(ENDPOINT, function (req, res) {
    res.send('Hello World')
});

app.post(ENDPOINT, function (req, res) {

    function onSaveSuccess(data) {
        res.ok(data);
    }

    function onSaveError(error) {
        res.error(error);
    }

    console.log(req)

    tipoSensorController.insert(req.data.dsTipoSensor, req.data.tpTipoSensor).then(onSaveError, onSaveSuccess);
});
