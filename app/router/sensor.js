const app = require('./../config/sensor');
const controller = require('./../controller/sensor');

const ENDPOINT = '/cidade';

app.get(ENDPOINT, (req, res) => {
    controller.findAll(res);
});

app.get(ENDPOINT.concat('/:id'), (req, res) => {
    controller.findById(res, req.params.id);
});

app.put(ENDPOINT, (req, res) => {
    controller.update(res, req.body);
});

app.post(ENDPOINT, (req, res) => {
    controller.insert(res, req.body);
});

app.delete(ENDPOINT.concat('/:id'), (req, res) => {
    controller.remove(res, req.params.id);
});