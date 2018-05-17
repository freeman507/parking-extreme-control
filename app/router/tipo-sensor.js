const app = require('../config/express');
const tipoSensorController = require('../controller/tipo-sensor');

const ENDPOINT = '/tipo-sensor';

function onSuccess(data) {
    console.log(1, data);
    res.status(200).send(data);
}

function onError(error) {
    console.log(0, error)
    res.status(500).send(error);
}

module.exports = {

    map: () => {

        app.get(ENDPOINT, (req, res) => {
            tipoSensorController.find().then(onSuccess, onError);
        });

        app.post(ENDPOINT, (req, res) => {
            tipoSensorController.insert(req.body).then(onError, onSuccess);
        });

    }
};
