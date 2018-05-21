const ctrl = {

    onSuccess: (response, data) => {
        response.status(200).send(data);
    },

    onError: (response, error) => {
        response.status(500).send(error);
    },

    insert: (dao, response, data) => {
        dao.insert(data,
            (data) => ctrl.onSuccess(response, data),
            (error) => ctrl.onError(response, error));
    },

    update: (dao, response, data) => {
        dao.update(data,
            (data) => ctrl.onSuccess(response, data),
            (error) => ctrl.onError(response, error));
    },

    findAll: (dao, response) => {
        dao.findAll(
            (data) => ctrl.onSuccess(response, data),
            (error) => ctrl.onError(response, error));
    },

    findById: (dao, response, id) => {
        dao.findById(id,
            (data) => ctrl.onSuccess(response, data),
            (error) => ctrl.onError(response, error));
    },

    remove: (dao, response, id) => {
        dao.remove(id,
            (data) => ctrl.onSuccess(response, data),
            (error) => ctrl.onError(response, error));
    }

};

module.exports = ctrl;
